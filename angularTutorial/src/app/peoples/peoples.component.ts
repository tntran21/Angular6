import { Component, OnInit } from '@angular/core';
import { People } from '../people';
// Sử dụng danh sách trong mock-people
import { PEOPLES } from '../mock-people';
// Su dung phuong thuc get tu peopleService
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {
  /* Tao 1 mang cua lop People */
  // people: People = {
  //   id: 1,
  //   name: 'Tran Van A'
  // }
  /* */
  // peoples = PEOPLES;
  // Su dung tu service
  peoples: People[];
  selectedPeople: People;
 
  constructor( private _peopleService: PeopleService ) { 
  }

  ngOnInit() {
    this.getPeoples();
  }
   // Xử lý sự kiện khi click vào 
  // onSelect(people: People):void {
  //   this.selectedPeople = people;
  // }
  // Tao phuong thuc getdata
  getPeoples(): void {
    // this.peoples = this._peopleService.getPeoples();
    this._peopleService.getPeoples().subscribe(peoples => this.peoples = peoples);
  }

  // Tao moi people
  addPeople(name: String) {
    // Xoa khoang trang o dau va cuoi chuoi
    name = name.trim();
    if (!name) {
      return ;
    }
    this._peopleService.addPeople({name} as People ).subscribe(
      people => {
        this.peoples.push(people);
      }
    )
  }

  // Delete people
  delePeople(people: People) {
    this.peoples = this.peoples.filter( h=> h !== people);
    this._peopleService.delePeople(people).subscribe();
  }

}
