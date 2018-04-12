import { GtRow } from '@angular-generic-table/core';

export interface Employee extends GtRow {
  id: number;
  name: string;
  lucky_number: number;
}
