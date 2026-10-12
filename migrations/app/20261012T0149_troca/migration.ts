#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/8ef28c54859878108789dd2f43fca7b92aa24f14e8a72d7695580a1a92692cb6/contract';
import endContract from '../../snapshots/8ef28c54859878108789dd2f43fca7b92aa24f14e8a72d7695580a1a92692cb6/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/9e7f8737acb18054b8ae82342b6c91430f59b01384fabf0111b130d3d5583773/contract';
import startContract from '../../snapshots/9e7f8737acb18054b8ae82342b6c91430f59b01384fabf0111b130d3d5583773/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, placeholder } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.dropColumn({ schema: 'public', table: 'User', column: 'createdAt' }),
      this.dropColumn({ schema: 'public', table: 'User', column: 'passwordHash' }),
      this.dropColumn({ schema: 'public', table: 'User', column: 'updatedAt' }),
      this.addColumn({
        schema: 'public',
        table: 'User',
        column: col('password', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.dataTransform(endContract, 'backfill-User-password', {
        check: () => placeholder('backfill-User-password:check'),
        run: () => placeholder('backfill-User-password:run'),
      }),
      this.setNotNull({ schema: 'public', table: 'User', column: 'password' }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
