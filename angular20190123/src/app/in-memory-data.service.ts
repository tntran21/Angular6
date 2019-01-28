import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
	createDb(){
		const heroes = [
			{
				id: 1,
				name: 'Ngan',
				age: 18,
				img: "/assets/images/ant-man.jpg"
			},
			{
				id: 2,
				name: 'Iron man',
				age: 12,
				img: "/assets/images/iron-man.jpg"
			},
			{
				id: 3,
				name: 'Spider Man',
				age: 20,
				img: "/assets/images/spider-man.jpg"
			},
			{
				id: 4, 
				name: 'Wonder Woman',
				age: 17,
				img: "/assets/images/wonder-woman.jpg"
			}
		]
		return {heroes};
	
	}

  constructor() { }
}
