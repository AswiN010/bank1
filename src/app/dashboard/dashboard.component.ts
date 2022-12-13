import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

user=''

constructor(private ds:DataService,private fb:FormBuilder){
this.user=this.ds.currentuser
}
depositform=this.fb.group({acno:[''],psw:[''],amnt:['']})
withdrawform=this.fb.group({acno1:[''],psw1:[''], amnt1:['']})
  deposit()
  {
    var acno=this.depositform.value.acno
    var psw=this.depositform.value.psw
    var amnt=this.depositform.value.amnt
    const result= this.ds.deposit(acno,psw,amnt)

    if (result) {
      alert(`${amnt} is credited to your account balance is ${result}`)
    } 
  }
  withdraw()
  {
    var acno=this.withdrawform.value.acno1
    var psw=this.withdrawform.value.psw1
    var amnt=this.withdrawform.value.amnt1
    const result= this.ds.withdraw(acno,psw,amnt)

    if (result) {
      alert(`${amnt} is withdrawed from your account balance is ${result}`)
    }
  }
  
}

