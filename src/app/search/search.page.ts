import { Material } from './../model/material';
import { NavController } from '@ionic/angular';
import { MaterialsService } from './../services/materials.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  materialsData: any;
  searchitem:any;
materials:Material[];


  material:Material;
  searchedItem : any ;
 
  search:boolean=true;
  constructor(public MaterialsService:MaterialsService,private nav:NavController) {
    this.materialsData=[];
    this.searchedItem=this.materialsData;
   }

  FilterJSONData(event:any){
    console.log(event.detail.value);
    this.searchitem=this.materialsData;
    const val=event.target.value;
    console.log(event.target.value);
    console.log(this.search);
    this.search=true;
    if (val && val.trim() === ''){
      this.search=true;
      console.log(this.search);
      this.getAllMaterials();
    }else{this.searchitem=this.searchitem.filter((item:any)=>{
       this.search=true;
       console.log(this.search);
      return (item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
    })}
  }

  ngOnInit() {
  }
  detail(id:number){
    this.nav.navigateForward(['/details-material/' + id]);
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

  _ionChange(event:any){
    console.log(event.detail.value);
    this.searchedItem=this.materialsData;
     const val =event.target.value;
     
     if(val&&val.trim() !=''){
       this.searchedItem=this.searchedItem.filter((item:any)=>{
         return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 );
       })
     }else
     {this.getAllMaterials();}
    }

//select searchable 
  materielChanged(id:number){
    //tselected 

    this.nav.navigateForward(['/details-material/' + id]);
  
  }







}