import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateEmployePageRoutingModule } from './update-employe-routing.module';

import { UpdateEmployePage } from './update-employe.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateEmployePageRoutingModule, ReactiveFormsModule, HttpClientModule
  ],
  declarations: [UpdateEmployePage]
})
export class UpdateEmployePageModule {}
