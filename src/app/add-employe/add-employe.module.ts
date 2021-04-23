import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEmployePageRoutingModule } from './add-employe-routing.module';

import { AddEmployePage } from './add-employe.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEmployePageRoutingModule, ReactiveFormsModule, HttpClientModule
  ],
  declarations: [AddEmployePage]
})
export class AddEmployePageModule {}
