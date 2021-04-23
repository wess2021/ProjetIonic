import { NavController } from '@ionic/angular';
import { EmployesService } from './../services/employes.service';
import { Employe } from './../model/employe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-employe',
  templateUrl: './details-employe.page.html',
  styleUrls: ['./details-employe.page.scss'],
})
export class DetailsEmployePage implements OnInit {

  employe:Employe= {id: null, name: '', email: '', job: '' };
  id:number;

  constructor( public router:ActivatedRoute, public employesService:EmployesService,private nav:NavController
) {}
ionViewWillEnter(){
  this.ngOnInit();
 }
  ngOnInit() {
    this.id=this.router.snapshot.params['id'];
   
   
    this.employesService.getEmploye(this.id).subscribe(response => {
    console.log(response);
     this.employe=response;
           
    })
  }

}