import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
data="Account No:"
acno=''
psw=''
  // userDetails:any={
  //   1000:{acno:1000,username:"anu",password:"123",balance:0},
  //   1001:{acno:1001,username:"amal",password:"123",balance:0},
  //   1002:{acno:1002,username:"arun",password:"123",balance:0},
  //   1003:{acno:1003,username:"amala",password:"123",balance:0},

  // }
  constructor(private router :Router,private ds:DataService)
  {

  }

  login()
  {
  
    var acno=this.acno
    var psw=this.psw
    const result= this.ds.login(acno,psw)

    if (result) {
      alert('Login success')
      this.router.navigateByUrl('dashboard')
    } else {
      alert('invalid user')
      
  
    }

  }


  // login()
  // {
  
  //   var acno=this.acno
  //   var psw=this.psw
  //   var userDetails=this.userDetails

  //   if (acno in userDetails) 
  //   {if (psw==userDetails[acno]["password"]) 
  //   {
  //     alert('login success')
  //     this.router.navigateByUrl('dashboard')
  //   } 
  //   else 
  //   {
  //     alert('incorrect password')
   
  //   }
      
  //   } 
  //   else 
  //   {
  //     alert('the user is Not valid')
  //   }
  // }

//   login(a:any,b:any)
//   {
    
//  this.acno=a.value
//  this.psw=b.value
//     var acno=this.acno
//     var psw=this.psw
//     var userDetails=this.userDetails

//     if (acno in userDetails) 
//     {if (psw==userDetails[acno]["password"]) 
//     {
//       alert('login success')
//     } 
//     else 
//     {
//       alert('incorrect password')
//     }
      
//     } 
//     else 
//     {
//       alert('the user is Not valid')
//     }
//   }
  acnochange(event:any)
  {
        this.acno=event.target.value
        console.log(this.acno);
        
  }
  passchange(event:any)
  {
    this.psw=event.target.value
    console.log(this.psw);
    
  }
}
