import { NavController } from '@ionic/angular';
import { MaterialsService } from './../services/materials.service';
import { Material } from './../model/material';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-material',
  templateUrl: './update-material.page.html',
  styleUrls: ['./update-material.page.scss'],
})
export class UpdateMaterialPage implements OnInit {

  material:Material;
  id:number;
  public edit:FormGroup;
  constructor(public formBuilder:FormBuilder,
     public materialsService:MaterialsService,
      private nav:NavController,
       public router:ActivatedRoute) {this.edit=formBuilder.group({
         id:[''],
         name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
         matricule:['',[Validators.required]],
         carte_grise:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]]
       }) }
       update(){
         const st= this.edit.value;
         this.materialsService.updateMaterial(this.id,st).subscribe(response => {
           this.edit.reset();
           console.log(response);
           this.nav.navigateForward('materials');
         })
       }

  ngOnInit() {
    this.id=this.router.snapshot.params['id'];
    this.materialsService.getMaterial(this.id).subscribe(response => {
      console.log(response);
      this.material=response;
      this.edit.patchValue(this.material);

    })
  }

}