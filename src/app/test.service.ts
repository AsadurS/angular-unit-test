import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestService {
   user :any={
    name:'Muhammad',
    age:16,
   }
   users:any;
  constructor(protected http:HttpClient) { }
  getUsers(url:string){
    this.http.get(url).subscribe((res:any)=>{
      this.users = res.value
    })
  }
  getDetails(){
    const resultPromise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('data')
      },1000)
    })
    return resultPromise;
  }
}
