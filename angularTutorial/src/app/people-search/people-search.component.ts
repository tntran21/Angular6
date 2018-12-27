import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { People } from '../people';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.css']
})
export class PeopleSearchComponent implements OnInit {

  peoples$: Observable<People[]>;
  private searchTerms = new Subject<string>();

  // push 1 dieu kien search vao luong Observable
  search(term: string) {
    this.searchTerms.next(term);
  }  
  constructor(private _peopleService: PeopleService) { }

  ngOnInit():void {
    this.peoples$ = this.searchTerms.pipe(
      // cho 0.3s sau moi lan nhan ban phim truoc khi vao luong 
      debounceTime(300),
      distinctUntilChanged(),

      // switch to new search 
      switchMap((term: String) => this._peopleService.search(term))
    )
  }

}
