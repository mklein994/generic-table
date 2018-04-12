import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomTableRoutingModule } from './custom-table-routing.module';
import { CustomTableComponent } from './custom-table.component';

@NgModule({
  imports: [
    CommonModule,
    CustomTableRoutingModule
  ],
  declarations: [CustomTableComponent]
})
export class CustomTableModule { }
