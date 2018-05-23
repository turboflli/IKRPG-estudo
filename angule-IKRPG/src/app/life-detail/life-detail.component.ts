import { Component, OnInit } from '@angular/core';
import { Life } from '../life';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-life-detail',
  templateUrl: './life-detail.component.html',
  styleUrls: ['./life-detail.component.css']
})
export class LifeDetailComponent implements OnInit {
@Input() life: Life;
  constructor() { }

  ngOnInit() {
  }

}
