import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { UsersComponent} from './users/users.component';
import { AdduserComponent } from './adduser/adduser.component';
import {UserprofileComponent} from './userprofile/userprofile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path:'adduser', component:AdduserComponent},
  { path:'userprofile/:position', component:UserprofileComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
