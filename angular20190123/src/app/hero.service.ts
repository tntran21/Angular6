import { Injectable } from '@angular/core';
import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

import { MessageService } from  './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { User } from './model/user';

const _httpHeader = {
	headers: new HttpHeaders({'ContenType': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor( 
	  	private _messageService: MessageService,
	  	private _http: HttpClient,
	  	private toastr: ToastrService
  	) { }

  user: User = {
  	id: 1,
  	userName: 'admin',
  	passWord: '123'
  }


  /* Sử dụng http để xử lý */
  private heroesUrl = 'api/heroes'; // url

  // getHeroes():Observable<Hero[]>{
  // 	// Thực hiện xuất tin nhắn mỗi khi lấy danh sách hero
  // 	this._messageService.add('HeroService: lấy danh sách Hero');
  // 	return of(HEROES);
  // }

  // Get 1 hero
  // getHero(id: number): Observable<Hero> {
  // 	this._messageService.add(`HeroService: Lấy hero với id=${id}`);
  // 	return of(HEROES.find(hero => hero.id === id));
  // }

  // Get heroes from the server thay thế cho getHeroes ở trên
  getHeroes(): Observable<Hero[]> {
  	return this._http.get<Hero[]>(this.heroesUrl)
  				.pipe(
  					catchError(this.handleError('getHeroes', []))
  					);
  }
  // Get hero by id
  getHero(id: number): Observable<Hero> {
  	const url = `${this.heroesUrl}/${id}`;
  	return this._http.get<Hero>(url).pipe(
  		tap(_ => this.toastr.success(`Lấy Hero với id=${id}`)));
  }

  // Update
  updateHero(hero: Hero): Observable<any> {

  	return this._http.put(this.heroesUrl, hero, _httpHeader)
  			.pipe(
  				tap(_ => this.toastr.success(`Update thành công Hero với id=${hero.id}`))
  			);
  }

  // Add new hero
  addHero(hero: Hero): Observable<Hero> {
  	return this._http.post<Hero>(this.heroesUrl, hero, _httpHeader)
  				.pipe(
  					tap((hero: Hero) => this.toastr.success(`Thêm thành công Hero với id=${hero.id}`))
  					);
  }

  // Delete
  deleHero(hero: Hero | number): Observable<Hero> {
  	const id = typeof hero === 'number' ? hero : hero.id;
  	const url = `${this.heroesUrl}/${id}`;
  	return this._http.delete<Hero>(url, _httpHeader)
  				.pipe(
  					tap(_ => this.toastr.success(`Xóa thành công Hero với id=${id}`))
  					)
  }
  /**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError<T> (operation = 'operation', result?: T) {
	  return (error: any): Observable<T> => {
	 
	    // TODO: send the error to remote logging infrastructure
	    console.error(error); // log to console instead
	 
	    // TODO: better job of transforming error for user consumption
	    // this.log(`${operation} failed: ${error.message}`);
	 
	    // Let the app keep running by returning an empty result.
	    return of(result as T);
	  };
	}


}
