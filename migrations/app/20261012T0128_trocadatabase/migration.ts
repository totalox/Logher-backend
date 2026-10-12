#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/9e7f8737acb18054b8ae82342b6c91430f59b01384fabf0111b130d3d5583773/contract';
import startContract from '../../snapshots/9e7f8737acb18054b8ae82342b6c91430f59b01384fabf0111b130d3d5583773/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/d3f33902111e88f50b9590d7bc2d0ebcd23025f9c2112c974c446fff51a9be9c/contract';
import endContract from '../../snapshots/d3f33902111e88f50b9590d7bc2d0ebcd23025f9c2112c974c446fff51a9be9c/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      ...this.renameColumn({
        schema: 'public',
        table: 'User',
        column: 'passwordHash',
        to: 'password',
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
