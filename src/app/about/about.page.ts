import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  contact={
    name:'Oussama Abid',
    email:'abidoussama2015@gmail.com',
    photo:'assets/log.png',
    telephone:'58273086'
    
      }
  constructor(public navCtrl: NavController) { }
  NavigateToHome() {
    this.navCtrl.navigateForward("/home");
  }

  ngOnInit() {
  }

}
