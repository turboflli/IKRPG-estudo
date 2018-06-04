import { Injectable } from '@angular/core';
import { Iniciativa } from './iniciativa';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IniciativaService {

	private inicUrl = 'api/iniciativas';//return do in memory
	private httpOptions = {
	  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	}


getInics(): Observable<Iniciativa[]> {
  this.messageService.add('IniciativaService: fetched inics');
   return this.http.get<Iniciativa[]>(this.inicUrl)
    .pipe(
   tap(iniciativas => this.log('fetched inics')),
      catchError(this.handleError('getInics', []))
    );
  //return of(LIFES);
}
addInic (inic: Iniciativa): Observable<Iniciativa> {
  return this.http.post<Iniciativa>(this.inicUrl, inic, this.httpOptions).pipe(
    tap((inic: Iniciativa) => this.log(`added inic w/ value=${inic.value} and names=${inic.names}`)),
    catchError(this.handleError<Iniciativa>('addInic'))
  );
}
updateInic (inic: Iniciativa): Observable<any> {
  return this.http.put(this.inicUrl, inic, this.httpOptions).pipe(
    tap(_ => this.log(`updated inic value=${inic.value}`)),
    catchError(this.handleError<any>('updateInic'))
  );
}
deleteInic (id: number): Observable<Iniciativa> {
  const url = `${this.inicUrl}/${id}`;

  return this.http.delete<Iniciativa>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted inic cursed id=${id}`)),
    catchError(this.handleError<Iniciativa>('deleteInic'))
  );
}

private log(message: string) {
  this.messageService.add('IniciativaService: ' + message);
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
