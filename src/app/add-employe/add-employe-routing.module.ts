import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEmployePage } from './add-employe.page';

const routes: Routes = [
  {
    path: '',
    component: AddEmployePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEmployePageRoutingModule {}
