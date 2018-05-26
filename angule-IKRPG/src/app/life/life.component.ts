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
 
add(name:String, type:String, value:String) {
	name=name.trim();
	if(!name) { return;}
	this.lifeService.addLife({ name, type, value } as Life)
	.subscribe(life => {
		this.lifes.push(life);
	});
}

delete(life: Life): void {
  this.lifes = this.lifes.filter(l => l !== life);
  this.lifeService.deleteLife(life).subscribe();
}
  constructor(private lifeService: LifeService) { 
	
  }

  ngOnInit() {
	  this.getLifes();
  }

}
