import { InMemoryDbService } from 'angular-in-memory-web-api';
import { People } from './People';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
// const people = People;
export class InMemoryDataService implements InMemoryDbService {
  // people: People;
  createDb() {
    const peoples = [
      { id: 1, name: 'Mr. Nice' },
      { id: 2, name: 'Narco' },
      { id: 3, name: 'Bombasto' },
      { id: 4, name: 'Celeritas' },
      { id: 5, name: 'Magneta' },
      { id: 6, name: 'RubberMan' },
      { id: 7, name: 'Dynama' },
      { id: 8, name: 'Dr IQ' },
      { id: 9, name: 'Magma' },
      { id: 10, name: 'Tornado' }
    ];
    return {peoples};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(peoples: People[]): number {
    return peoples.length > 0 ? Math.max(...peoples.map(people => people.id)) + 1 : 1;
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/