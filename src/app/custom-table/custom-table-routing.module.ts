import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomTableComponent } from './custom-table.component';

const routes: Routes = [
  { path: 'custom-table', component: CustomTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomTableRoutingModule { }
