import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  username: FormControl;
  email: FormControl;
  age: FormControl;
  addUser: FormGroup

  constructor(
    build: FormBuilder
  ) { }

  ngOnInit() {
  }

}
