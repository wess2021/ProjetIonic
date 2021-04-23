import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchEmployePageRoutingModule } from './search-employe-routing.module';

import { SearchEmployePage } from './search-employe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchEmployePageRoutingModule
  ],
  declarations: [SearchEmployePage]
})
export class SearchEmployePageModule {}
