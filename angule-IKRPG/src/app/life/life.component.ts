import { Component, OnInit } from '@angular/core';
import { LIFES } from '../mock-lifes';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit {

lifes=LIFES;
	/*life: Life = {
		type:'vitalidade',
		value:'8'
	}*/


  selectedLife: Life;

  onSelect(life: Life): void {
    this.selectedLife = life;
  }
  constructor() { }

  ngOnInit() {
  }

}
