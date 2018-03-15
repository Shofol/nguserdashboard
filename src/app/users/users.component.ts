import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UserService } from '../user.service';
import { Element } from '../user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent  {
  constructor(private userService:UserService) { }
  displayedColumns = ['position', 'name', 'account', 'bank', 'branch','delete'];
  data=this.userService.getdata();
  dataSource = new MatTableDataSource(this.data);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  remove(user:Element){
    this.data=this.userService.remove(user);
    this.dataSource = new MatTableDataSource(this.data);
    console.log(this.data);
  }



}



