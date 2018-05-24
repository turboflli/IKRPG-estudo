import { Injectable } from '@angular/core';
import { Life } from './life';
import { LIFES } from './mock-lifes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class LifeService {
getLifes(): Observable<Life[]> {
	// TODO: send the message _after_ fetching the lifes
	this.messageService.add('LifeSevice: fetched lifes');
  return of(LIFES);
}

getLife(name: String): Observable<Life> {
  // TODO: send the message _after_ fetching the life
  this.messageService.add(`LifeService: fetched life name=${name}`);
  return of(LIFES.find(life => life.name === name));
}

  constructor(private messageService: MessageService) { }
}
