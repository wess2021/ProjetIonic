import { NavController } from '@ionic/angular';
import { EmployesService } from './../services/employes.service';
import { Employe } from './../model/employe';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.page.html',
  styleUrls: ['./add-employe.page.scss'],
})
export class AddEmployePage implements OnInit {
  employes:Employe[]=[];
  public add: FormGroup;
  constructor(public formBuilder: FormBuilder, public EmployesService: EmployesService, private nav:NavController) {
    this.add= formBuilder.group({
      name: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      email: ["",[Validators.required,Validators.email]],
      job: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(30)]]
    })
   }
   onadd(){
     const data = this.add.value;
     this.EmployesService.createEmploye(data).subscribe((response) => {
      console.log(response)
      this.nav.pop();
      console.log(this.add.value);
      this.nav.navigateRoot('employe');
     })
   
   }
  ngOnInit() {
  }

}
