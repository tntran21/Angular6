import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';

const router: Routes = [
  { path: '', redirectTo: "/add-user", pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListUserComponent },
  { path: 'add-user', component: AddUserComponent}
]

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    CommonModule, 
    RouterModule.forRoot(router)
  ]
})
export class AppRoutingModule { }
