import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit {
	life: Life = {
		type:'vitalidade',
		value:'8'
	}
  constructor() { }

  ngOnInit() {
  }

}
