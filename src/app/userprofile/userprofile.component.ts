import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Element } from '../user.service';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
   
  user:Element[];
  changedbank:string;
  changedbranch:string;

  constructor(private userservice: UserService,private route: ActivatedRoute, private location: Location) { }

  getuser():void{
    const position = +this.route.snapshot.paramMap.get('position');
     this.user=this.userservice.getuser(position);
     (<HTMLInputElement>document.getElementsByName('name')[0]).value=this.user[0].name;
     (<HTMLInputElement>document.getElementsByName('account')[0]).value=this.user[0].account;
     (<HTMLElement>document.getElementsByName('bankname')[0]).innerHTML=this.user[0].bank;
     this.changedbank=this.user[0].bank;
     (<HTMLSelectElement>document.getElementsByName('branchname')[0]).innerHTML=this.user[0].branch;
     this.changedbranch=this.user[0].branch;
  }
  
  change(uname:string,uaccount:string,ubank:string,ubranch:string){

    if(ubank!=null){
      this.changedbank=ubank;
    }

    if(ubranch!=null){
      this.changedbranch=ubranch;
    }

    const position = +this.route.snapshot.paramMap.get('position');
    this.userservice.change(position,uname,uaccount,this.changedbank,this.changedbranch);
  }


  ngOnInit() {
   this.getuser(); 
  }

}
