import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	/* Sau khi sử dụng service để lấy dữ liêu ta bỏ dòng heroes= HEROES */
  // heroes = HEROES;
  heroes: Hero[];
  // selectedHero: Hero;

  constructor( private _heroService: HeroService) { }
  

  ngOnInit() {
  	this.getHeroes();
  }
  
  // onSelected(hero: Hero) {
  // 	this.selectedHero = hero;
  // }
  /* Sử dụng service get danh sách trong heroes */
  // getHeroes() {
  // 	this.heroes = this._heroService.getHeroes();
  // }
  getHeroes() {
  	this._heroService.getHeroes().subscribe(h => this.heroes = h)
  }

}
