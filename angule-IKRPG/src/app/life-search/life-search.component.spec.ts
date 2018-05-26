import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeSearchComponent } from './life-search.component';

describe('LifeSearchComponent', () => {
  let component: LifeSearchComponent;
  let fixture: ComponentFixture<LifeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
