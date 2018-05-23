import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeDetailComponent } from './life-detail.component';

describe('LifeDetailComponent', () => {
  let component: LifeDetailComponent;
  let fixture: ComponentFixture<LifeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
