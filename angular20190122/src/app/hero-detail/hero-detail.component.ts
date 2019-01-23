import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// Sử dụng input để truyền dữ liệu giũa các component với nhau
import { Input } from '@angular/core';

import { HeroService } from  '../hero.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

	// Truyền dữ liệu giữa các component khác nhau sử dụng @Input()
	// @Input() hero: Hero;
	hero: Hero;

  constructor(
  	private _heroService: HeroService,
  	private _location: Location,
  	private _routes: ActivatedRoute
  	) { }

  ngOnInit() {
  	this.getHero();
  }

  // Lấy thông tin chi tiết dựa trên id và tạo đường dẫn
  getHero() {
  	const id = +this._routes.snapshot.paramMap.get('id');
  	this._heroService.getHero(id).subscribe(hero => this.hero = hero);
  }
  // Trở lại
  goBack() {
  	this._location.back();
  }

}
