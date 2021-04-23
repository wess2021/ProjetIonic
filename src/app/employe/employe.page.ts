import { NavController } from '@ionic/angular';
import { EmployesService } from './../services/employes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.page.html',
  styleUrls: ['./employe.page.scss'],
})
export class EmployePage implements OnInit {
  employesData: any;
  constructor(public EmployesService:EmployesService,private nav:NavController) {this.employesData=[]; }
  

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getAllEmploye();
   }
   getAllEmploye(){
     this.EmployesService.getEmployes().subscribe(response=>{
       console.log(response);
       this.employesData=response;
     });
   }
   addEmploye(){
     this.nav.navigateForward('/add-employe');
   }
   detail(id:number){
    this.nav.navigateForward(['/details-employe/' + id]);
    }
   edit(id:number){
   this.nav.navigateForward(['/update-employe/' + id]);
   }
   delete(employe){
     this.EmployesService.deleteEmploye(employe.id).subscribe(response => {
       console.log(employe.id);
      this.getAllEmploye();
      this.nav.pop();
     });
   
   }
}
