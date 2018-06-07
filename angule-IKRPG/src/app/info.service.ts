import { Injectable } from '@angular/core';
import { Info } from './info';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

	private infoUrl = 'api/infos';//return do in memory
	private httpOptions = {
	  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	}
	getInfo(id: String): Observable<Info> {
	const url=`${this.infoUrl}/${id}`;
	  return this.http.get<Info>(url).pipe(
	  );
	}
	
	getInfos(aba:string): Observable<Info[]> {
  
   return this.http.get<Info[]>(`${this.infoUrl}/?id=${aba}`)
    .pipe();
}

  constructor( private http: HttpClient) { }
}
