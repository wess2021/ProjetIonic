import { Employe } from './../model/employe';
import { NavController } from '@ionic/angular';
import { EmployesService } from './../services/employes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.page.html',
  styleUrls: ['./update-employe.page.scss'],
})
export class UpdateEmployePage implements OnInit {

  employe:Employe;
  id:number;
  public edit:FormGroup;
  constructor(public formBuilder:FormBuilder,
     public employesService:EmployesService,
      private nav:NavController,
       public router:ActivatedRoute) {this.edit=formBuilder.group({
         id:[''],
         name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
         email:['',[Validators.required,Validators.email]],
         job:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]]
       }) }
       update(){
         const st= this.edit.value;
         this.employesService.updateEmploye(this.id,st).subscribe(response => {
           this.edit.reset();
           console.log(response);
           this.nav.navigateForward('employe');
         })
       }

  ngOnInit() {
    this.id=this.router.snapshot.params['id'];
    this.employesService.getEmploye(this.id).subscribe(response => {
      console.log(response);
      this.employe=response;
      this.edit.patchValue(this.employe);

    })
  }

}