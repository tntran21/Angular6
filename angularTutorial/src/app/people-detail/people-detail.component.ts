import { Component, OnInit, Input } from '@angular/core';
import { People } from '../people';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PeopleService } from '../people.service';
@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})

export class PeopleDetailComponent implements OnInit {
  @Input() people: People;
  // people: People;
  
  constructor( 
    private route: ActivatedRoute,
    private _peopleService: PeopleService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getPeople();
  }


  // Lấy thông tin chi tiết từ id trên thanh param khi nhấn vào
  getPeople(): void {
    // Load data từ url thông qua snapshot
    const id =+ this.route.snapshot.paramMap.get('id');
    this._peopleService.getPeople(id).subscribe(people => this.people = people);
  }

  // Lưu thông tin đã được thay đổi
  save() {
    this._peopleService.updatePeople(this.people).subscribe(()=> this.goBack());
  }

  goBack() {
    this.location.back();
  }

}
