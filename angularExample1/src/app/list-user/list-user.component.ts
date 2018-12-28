import { Component, OnInit } from '@angular/core';
import { USERS } from '../model/mock-user';
import { User } from '../model/user';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users = USERS;

  selectedUser: User;
  constructor() { }

  ngOnInit() {
  }


  onSelected(user: User) {
    this.selectedUser = user;
  }

}
