import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsMaterialPageRoutingModule } from './details-material-routing.module';

import { DetailsMaterialPage } from './details-material.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsMaterialPageRoutingModule, ReactiveFormsModule, HttpClientModule
  ],
  declarations: [DetailsMaterialPage]
})
export class DetailsMaterialPageModule {}
