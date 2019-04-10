import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,} from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';
import * as utils from '../../utils/utils'

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class RegisterService {

	private heroesUrl = utils.myUrl;

	constructor(public http: HttpClient) { }

		getHeroes (userName:string,passWord:string): Observable<any> {
			return new Observable((observable)=>{
				this.http.get(this.heroesUrl+'?userName='+userName+'&passWord='+passWord).subscribe((response)=>{
					observable.next(response);
				});
			})
	  }
}
