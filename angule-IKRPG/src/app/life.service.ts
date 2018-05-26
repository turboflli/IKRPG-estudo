import { Injectable } from '@angular/core';
import { Life } from './life';
//import { LIFES } from './mock-lifes'; // substituido pelo in memory
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LifeService {
	
	private lifeUrl = 'api/lifes';//return do in memory
	private httpOptions = {
	  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

getLifes(): Observable<Life[]> {
	// TODO: send the message _after_ fetching the lifes
	this.messageService.add('LifeSevice: fetched lifes');
   return this.http.get<Life[]>(this.lifeUrl)
    .pipe(
	 tap(lifes => this.log('fetched lifes')),
      catchError(this.handleError('getLifes', []))
    );
  //return of(LIFES);
}



getLife(id: number): Observable<Life> {//totaly unless
  // TODO: send the message _after_ fetching the life
const url=`${this.lifeUrl}/${id}`;// will use a cursed fucking id, even if it doesn't exist
  return this.http.get<Life>(url).pipe(
	tap(_ => this.log(`fetched life cursed id=${id}`)),
	catchError(this.handleError<Life>(`getLife id=${id}`))
  );
  //this.messageService.add(`LifeService: fetched life name=${name}`);
  //return of(LIFES.find(life => life.name === name));
}

/** PUT: update the hero on the server */
updateLife (life: Life): Observable<any> {
  return this.http.put(this.lifeUrl, life, this.httpOptions).pipe(
    tap(_ => this.log(`updated life name=${life.name}`)),
    catchError(this.handleError<any>('updateLife'))
  );
}

addLife (life: Life): Observable<Life> {
	return this.http.post<Life>(this.lifeUrl, life, this.httpOptions).pipe(
    tap((life: Life) => this.log(`added life w/ name=${life.name} and cursed id=${life.id}`)),//can't see the cursed id because it doesn't exist
    catchError(this.handleError<Life>('addLife'))
  );
}

/** DELETE: delete the life from the server */
deleteLife (life: Life | number): Observable<Life> {
  const id = typeof life === 'number' ? life : life.id;
  const url = `${this.lifeUrl}/${id}`;

  return this.http.delete<Life>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted life cursed id=${id}`)),
    catchError(this.handleError<Life>('deleteLife'))
  );
}

/* GET lifes whose name contains search term */
searchLifes(term: string): Observable<Life[]> {
  if (!term.trim()) {
    // if not search term, return empty life array.
    return of([]);
  }
  return this.http.get<Life[]>(`${this.lifeUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`found lifes matching "${term}"`)),
    catchError(this.handleError<Life[]>('searchLifes', []))
  );
}

private log(message: string) {
  this.messageService.add('LifeService: ' + message);
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.log(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  constructor( private http: HttpClient,private messageService: MessageService) { }
}
