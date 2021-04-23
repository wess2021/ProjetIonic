import { NavController } from '@ionic/angular';
import { Material } from './../model/material';
import { MaterialsService } from './../services/materials.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details-material',
  templateUrl: './details-material.page.html',
  styleUrls: ['./details-material.page.scss'],
})
export class DetailsMaterialPage implements OnInit {

  material:Material= {id: null, name: '', matricule: '', carte_grise: '' };
  id:number;

  constructor( public router:ActivatedRoute, public materialsService:MaterialsService,private nav:NavController
) {}
ionViewWillEnter(){
  this.ngOnInit();
 }
  ngOnInit() {
    this.id=this.router.snapshot.params['id'];
   
   
    this.materialsService.getMaterial(this.id).subscribe(response => {
    console.log(response);
     this.material=response;
           
    })
  }

}
