import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Xin chào';
  user: User = {
  	id: 1,
  	name: 'Ngan Tran',
  	age: 18
  }
}
