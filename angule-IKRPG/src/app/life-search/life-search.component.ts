import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Life } from '../life';
import { LifeService } from '../life.service';

@Component({
  selector: 'app-life-search',
  templateUrl: './life-search.component.html',
  styleUrls: [ './life-search.component.css' ]
})
export class LifeSearchComponent implements OnInit {
  lifes$: Observable<Life[]>;
  private searchTerms = new Subject<string>();

  constructor(private lifeService: LifeService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.lifes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.lifeService.searchLifes(term)),
    );
  }
}