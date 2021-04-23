import { NavController } from '@ionic/angular';
import { MaterialsService } from './../services/materials.service';
import { Material } from './../model/material';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.page.html',
  styleUrls: ['./add-material.page.scss'],
})
export class AddMaterialPage implements OnInit {
  materials:Material[]=[];
  public add: FormGroup;
  constructor(public formBuilder: FormBuilder, public materialsService: MaterialsService, private nav:NavController) {
    this.add= formBuilder.group({
      name: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      matricule: ["",[Validators.required]],
      carte_grise: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(30)]]
    })
   }
   onadd(){
     const data = this.add.value;
     this.materialsService.createMaterial(data).subscribe((response) => {
      console.log(response)
      this.nav.pop();
      console.log(this.add.value);
      this.nav.navigateRoot('materials');
     })
   
   }
  ngOnInit() {
  }

}
