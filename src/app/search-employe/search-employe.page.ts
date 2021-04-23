import { NavController } from '@ionic/angular';
import { EmployesService } from './../services/employes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-employe',
  templateUrl: './search-employe.page.html',
  styleUrls: ['./search-employe.page.scss'],
})
export class SearchEmployePage implements OnInit {
  employesData: any;
  searchitem: any;
  search: boolean = true;
  constructor(
    public EmployesService: EmployesService,
    private nav: NavController
  ) {
    this.employesData = [];
  }

  FilterJSONData(event: any) {
    console.log(event.detail.value);
    this.searchitem = this.employesData;
    const val = event.target.value;
    console.log(event.target.value);
    console.log(this.search);
    this.search = true;
    if (val && val.trim() === '') {
      this.search = true;
      console.log(this.search);
      this.getAllEmploye();
    } else {
      this.searchitem = this.searchitem.filter((item: any) => {
        this.search = true;
        console.log(this.search);
        return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }

 
  ngOnInit() {
  }
  detail(id:number){
    this.nav.navigateForward(['/details-employe/' + id]);
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
