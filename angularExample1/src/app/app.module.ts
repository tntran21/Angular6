import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// su dung ReactiveFormModule de su dung cac dat tinh cua form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { StaffsComponent } from './staffs/staffs.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';

// import service
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    StaffsComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Validators,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
