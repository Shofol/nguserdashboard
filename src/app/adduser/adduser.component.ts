import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})

export class AdduserComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  
  submit(uname:string,uaccount:string,ubank:string,ubranch:string){
    this.userService.add(uname,uaccount,ubank,ubranch);
  }

}
