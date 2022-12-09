import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
acno=''
psw=''
amnt=''

withac=''
withps=''
witham=''
user=''

constructor(private ds:DataService){
this.user=this.ds.currentuser
}

  deposit()
  {
    var acno=this.acno
    var psw=this.psw
    var amnt=this.amnt
    const result= this.ds.deposit(acno,psw,amnt)

    if (result) {
      alert(`${amnt} is credited to your account balance is ${result}`)
    } 
  }
  withdraw()
  {
    var acno=this.withac
    var psw=this.withps
    var amnt=this.witham
    const result= this.ds.withdraw(acno,psw,amnt)

    if (result) {
      alert(`${amnt} is withdrawed from your account balance is ${result}`)
    }
  }
  
}
