import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsMaterialPage } from './details-material.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsMaterialPageRoutingModule {}
