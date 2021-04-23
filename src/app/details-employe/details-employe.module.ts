import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsEmployePageRoutingModule } from './details-employe-routing.module';

import { DetailsEmployePage } from './details-employe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsEmployePageRoutingModule
  ],
  declarations: [DetailsEmployePage]
})
export class DetailsEmployePageModule {}
