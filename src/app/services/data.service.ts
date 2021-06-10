import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser="";

options={
  withCredentials:true
}



  accountDetails:any={
    1000:{acno:1000,username:"userone",password:"userone",balance:50000},
    1001:{acno:1001,username:"usertwo",password:"usertwo",balance:5000},
    1002:{acno:1002,username:"userthree",password:"userthree",balance:10000},
    1003:{acno:1003,username:"userfour",password:"userfour",balance:6000}
  }
  

  constructor(private http:HttpClient) { 
    this.getDetails();
  }

  saveDetails(){
    localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails))
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  }

  getDetails(){
    if(localStorage.getItem("accountDetails")){
    this.accountDetails=JSON.parse(localStorage.getItem("accountDetails") || '')
    }
    if(localStorage.getItem("currentUser")){
    this.currentUser=JSON.parse(localStorage.getItem("currentUser") || '')
    }
  }



  register(uname:any,acno:any,pswd:any){
    const data={
      uname,
      acno,
      pswd
    }

    return this.http.post(environment.apiUrl+"/register",data)
    
    //let user=this.accountDetails;
    //if(acno in user){
      //return false;
    
  //} 
  //else{
    //user[acno]={
      //acno,
      //username:uname,
      //password:pswd,
      //balance:0
    //}
    //this.saveDetails();
 //return true;
  
 // }

  }
  login(acno:any,pswd:any){

    const data={
      acno,
      pswd
    }

    return this.http.post(environment.apiUrl+"/login",data,this.options)
    
    //let user=this.accountDetails;
    
    //if(acno in user){
     //   if(pswd==user[acno]["password"]){
       //   this.currentUser=user[acno]["password"]
       //   this.saveDetails();
       //return true;
            
      //  }
      //  else{
         //   alert("Incorrect Password")
          //  return false;
       // }
    //}
    //else{
        //alert("Invalid Account")
    //}

  }
  deposit(acno:any,pswd:any,amount:any){

    const data={
      acno,
      pswd,
      amount
    }

    return this.http.post(environment.apiUrl+"/deposit",data,this.options)
    
    // var amount=parseInt(amt);
    //let user=this.accountDetails;
    // if(acno in user){
    //  if(pswd==user[acno]["password"]){
    //    user[acno]["balance"]+=amount;
    //    this.saveDetails();
    //   return user[acno]["balance"];
    //   }
        
    //  else{
    //   alert("Incorrect Password");
    //    return false;
    // }
    //  }
    //else{
    //   alert("Invalid Account");
    //  return false;
    //}
  }
  withdraw(acno:any,pswd:any,amount:any){

    const data={
      acno,
      pswd,
      amount
    }

    return this.http.post(environment.apiUrl+"/withdraw",data,this.options)
    
   // var amount=parseInt(amt);
   // let user=this.accountDetails;
   // if(acno in user){
    //  if(pswd==user[acno]["password"]){
    //    if(user[acno]["balance"]>amount){
     //     user[acno]["balance"]-=amount;
     //     this.saveDetails();
     //     return user[acno]["balance"];
     //   }
     //   else{
     //     alert("Insufficient Balance");
     //     return false;
     //   }
     // }
     // else{
     //   alert("Incorrect Password");
     //   return false;

     // }
     // }
     // else{
     //   alert("Invalid Account");
     //   return false;
     // }
}

deleteAccDetails(acno:any){
  return this.http.delete(environment.apiUrl+"/deleteAccDetails/"+acno.options)
}
}
