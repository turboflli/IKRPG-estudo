import { Component, OnInit } from '@angular/core';
import { LifeService } from '../life.service';
import { Life } from '../Life';
@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit {

lifes:Life[];
	

getLifes(): void {
  this.lifeService.getLifes()
  .subscribe(lifes => this.lifes = lifes);
  
}
  
  constructor(private lifeService: LifeService) { 
	
  }

  ngOnInit() {
	  this.getLifes();
  }

}
