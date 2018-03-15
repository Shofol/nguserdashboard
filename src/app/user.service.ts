import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class UserService {

  constructor(public snackBar: MatSnackBar) { }

  getdata():Element[]{
    return ELEMENT_DATA;
  }

  add(uname:string,uaccount:string,ubank:string,ubranch:string){
    ELEMENT_DATA.push({position:ELEMENT_DATA[ELEMENT_DATA.length-1].position+1,name:uname,account:uaccount,bank:ubank,branch:ubranch});
    let snackBarRef = this.snackBar.open('User Added Succesfully', 'Undo', {duration: 2000});
  }

  change(uposition:number,uname:string,uaccount:string,ubank:string,ubranch:string){
      ELEMENT_DATA[uposition-1].name=uname;
      ELEMENT_DATA[uposition-1].bank=ubank;
      ELEMENT_DATA[uposition-1].branch=ubranch;
      console.log("ok"+ubranch);
      let snackBarRef = this.snackBar.open('User Changed Succesfully', 'Undo', {duration: 2000});
  }

  remove(user:Element){
      var x=user.position-1;
     ELEMENT_DATA.splice(x,1);
     return ELEMENT_DATA;
      
  }

  getuser(position:number){
    return ELEMENT_DATA.filter(ELEMENT_DATA=>ELEMENT_DATA.position==position);
  }


}
export class Element {
  name: string;
  position: number;
  account: string;
  bank: string;
  branch: string;
}

export var ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Rahim', account: '10079', bank: 'H', branch: 'Dhaka' },
  { position: 2, name: 'Karim', account: '40026', bank: 'He', branch: 'Dhaka' },
  { position: 3, name: 'Jashim', account: '6941', bank: 'Li', branch: 'Dhaka' },
  { position: 4, name: 'Kamal', account: '90122', bank: 'Be', branch: 'Dhaka' },
  { position: 5, name: 'Jamal', account: '10811', bank: 'B', branch: 'Dhaka' },
  { position: 6, name: 'Rahman', account: '120107', bank: 'C', branch: 'Dhaka' },
  { position: 7, name: 'Chow', account: '140067', bank: 'N', branch: 'Dhaka' },

];
