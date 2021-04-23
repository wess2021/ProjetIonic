import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchEmployePage } from './search-employe.page';

const routes: Routes = [
  {
    path: '',
    component: SearchEmployePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchEmployePageRoutingModule {}
