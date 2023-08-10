import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  user ='';
  data:any;
  constructor(){ 
    this.getUser()
  }

  returnVal(data: boolean):Boolean {
		return !data ;
	}
  getUser(){
    // this.service.getUsers('http://localhost:8000/odata/Customers');
    // this.service.getDetails().then((data) =>{
    //   this.data = data
    // })
   
  }
}
