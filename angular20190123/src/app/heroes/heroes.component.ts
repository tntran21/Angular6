import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  // registerForm: FormGroup;
  submitted = false;

  constructor( 
  		private _heroService: HeroService,	
  		private toastr: ToastrService,
  		// private formBuilder: FormBuilder
  	) { }
  

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

  /* Thêm mới hero sử dụng serve */
  addHero(name: string, age: number, img: string) {
  	// Loại bỏ khoảng trống đầu và cuối chuỗi
  	name = name.trim();
  	if(!name) {
  		return ;
  	}
  	this._heroService.addHero({name, age, img} as Hero)
  		.subscribe(
  			hero => this.heroes.push(hero)

  		);
  }

  // Xóa hero
  deleHero(hero: Hero) {
  	this.heroes = this.heroes.filter(h => h !== hero);
  	this._heroService.deleHero(hero).subscribe();
  }

  	url: string;
	onFileChanged(event) {
	    const file = event.target.files[0]
	}


}
