import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericTableModule } from '@angular-generic-table/core';
import { CustomTableRoutingModule } from './custom-table-routing.module';
import { CustomTableComponent } from './custom-table.component';

@NgModule({
  imports: [
    CommonModule,
    GenericTableModule,
    CustomTableRoutingModule
  ],
  declarations: [CustomTableComponent]
})
export class CustomTableModule { }
