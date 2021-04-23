import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsEmployePage } from './details-employe.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsEmployePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsEmployePageRoutingModule {}
