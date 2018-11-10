import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import * as utils from '../../utils/utils'

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
providedIn: 'root'
})
export class RegisterService {

	private heroesUrl = utils.myUrl;

constructor(
	private http: HttpClient,
) { }

		getHeroes (userName:string,passWord:string): Observable<Object> {
			return null;
//	    return this.http.get(this.heroesUrl+'?userName='+userName+'&passWord='+passWord)
//	      .pipe(
////	        tap(heroes => this.log('fetched heroes')),
////	        catchError(this.handleError('getHeroes', []))
//	      );
	  }
}
