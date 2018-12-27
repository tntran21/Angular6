import { Injectable } from '@angular/core';
import { People } from './people';
import { PEOPLES } from './mock-people';
// De xu dung service phai import rxjs: xu ly bat dong bo
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private peoplesUrl = 'api/peoples'; // Url to web api

  constructor( 
    private _http: HttpClient,
    private _messageService: MessageService
  ) { }

  /* Them phuong thuc xu ly (Hien tai dang su dung ham of cua rxjs de tra ve cac doi tuong gia nhu 1 observable) */
  // getPeoples(): Observable<People[]> {
  //   this._messageService.add('PeopleService: fetched peoples')
  //   return of(PEOPLES);
  // }
  /* Thay getPeoples() su dung HttpClient de lay danh sach.
  *  Get people from serve
   */
  getPeoples (): Observable<People[]> {
    return this._http.get<People[]>(this.peoplesUrl)
                .pipe(
                  tap(_=> this.log('fetched peoples')),
                  catchError(this.handleError('getPeoples', []))
                );
  }

  // Get people khi click vao item, lay id tu param de lay. Su dung cho peopleDetail
  /**
   * Get people bang id, tra ve loi 404 neu khong tim thay.
   */
  getPeople(id: number): Observable<People> {
    const url = `${this.peoplesUrl}/${id}`;
    // this._messageService.add(`PeopleService: fetched people id=${{id}}`);
    // return of(PEOPLES.find(people => people.id === id));
    return this._http.get<People>(url).pipe(
      tap(_ => this.log(`fetch people, ${id}`)),
      catchError(this.handleError<People>(`get People id=${id}`))
    )
  }

  // Update thong tin. su dung phuong thuc put de update
  /**
   * put co 3 tham so truyen vao:
   * url
   * du lieu can thay doi (people)
   * Tuy chon
   * @param people 
   */
  updatePeople(people: People) {
    return this._http.put(this.peoplesUrl, people, httpOptions).pipe(
      tap(_ => this.log(`update people id=${people.id}`)),
      catchError(this.handleError<any>('updatePeople'))
    )
  }

  /**
   * Add new people
   * @param operation 
   * @param result 
   */
  addPeople(people: People): Observable<People> {
    return this._http.post<People>(this.peoplesUrl, people, httpOptions).pipe(
      tap((people: People) => this.log(`added new people id=${people.id}`)),
      catchError(this.handleError<People>('addPeople'))
    )
  }

  /**
   * Xoa people
   * @param operation 
   * @param result 
   */
  delePeople(people: People | number): Observable<People> {
    const id = typeof people === 'number' ? people : people.id;
    const url = `${this.peoplesUrl}/${id}`;

    return this._http.delete<People>(url, httpOptions).pipe(
      tap(_ => this.log(`delete people id=${id}`)),
      catchError(this.handleError<People>('delePeople'))
    )
  }

  /**
   * Tim kiem 
   * @param operation 
   * @param result 
   */
  search(flag: String): Observable<People[]> {
    if (!flag.trim()) {
      return of([]);
    }
    return this._http.get<People[]>(`${this.peoplesUrl}/?name=${flag}`).pipe(
      tap(_ => this.log(`found item "${flag}"`)),
      catchError(this.handleError<People[]>('search'))
    );
  }


  /**
   * Dieu khien hoat dong cua http khi that bai.
   * De app duoc tiep tuc hoat dong.
   * @param operation - ten cua hoat dong khi that bai.
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    // Log 1 PeopleService message voi MessageService
    private log(message: string) {
      this._messageService.add(`PeopleService: ${message}`);
    }
  

  // getPeoples(): People[] {
  //   return PEOPLES;
  // }
} 
