import { IonItem, LoadingController, NavController } from '@ionic/angular';
import { MaterialsService } from './../services/materials.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.page.html',
  styleUrls: ['./materials.page.scss'],
})
export class MaterialsPage implements OnInit {
  materialsData: any;
  searchitem:any;
  search:boolean=true;
  constructor(public MaterialsService:MaterialsService,private nav:NavController) {this.materialsData=[]; }


  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getAllMaterials();
   }
   getAllMaterials(){
     this.MaterialsService.getMaterials().subscribe(response=>{
       console.log(response);
       this.search=false;
       this.materialsData=response;

     });
   }
   addMaterial(){
     this.nav.navigateForward('/add-material');
   }
   detail(id:number){
    this.nav.navigateForward(['/details-material/' + id]);
    }
    materielChanged(id:number){
      this.nav.navigateForward(['/details-material/' + id]);
      }
   edit(id:number){
   this.nav.navigateForward(['/update-material/' + id]);
   }
   delete(material){
     this.MaterialsService.deleteMaterial(material.id).subscribe(response => {
       console.log(material.id);
      this.getAllMaterials();
      this.nav.pop();
     });
   
   }
}