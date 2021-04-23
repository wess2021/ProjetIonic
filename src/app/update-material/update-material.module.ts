import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMaterialPageRoutingModule } from './update-material-routing.module';

import { UpdateMaterialPage } from './update-material.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMaterialPageRoutingModule,ReactiveFormsModule, HttpClientModule
  ],
  declarations: [UpdateMaterialPage]
})
export class UpdateMaterialPageModule {}
