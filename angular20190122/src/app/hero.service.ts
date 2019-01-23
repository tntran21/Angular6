import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

import { MessageService } from  './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor( private _messageService: MessageService) { }

  getHeroes():Observable<Hero[]>{
  	// Thực hiện xuất tin nhắn mỗi khi lấy danh sách hero
  	this._messageService.add('HeroService: lấy danh sách Hero');
  	return of(HEROES);
  }

  // Get 1 hero
  getHero(id: number): Observable<Hero> {
  	this._messageService.add(`HeroService: Lấy hero với id=${id}`);
  	return of(HEROES.find(hero => hero.id === id));
  }
}
