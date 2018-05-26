import { Life } from '../Life';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LifeService } from '../life.service';

@Component({
  selector: 'app-life-detail',
  templateUrl: './life-detail.component.html',
  styleUrls: ['./life-detail.component.css']
})

export class LifeDetailComponent implements OnInit {
@Input() life: Life;
  constructor( 
  private route: ActivatedRoute,
  private lifeService: LifeService,
  private location: Location
  ) { }

  ngOnInit(): void {
	  this.getLife();
  }
  
  getLife(): void {
	  const id = +this.route.snapshot.paramMap.get('id'); // put (+) in front of this to converto to number
	  this.lifeService.getLife(id)
		.subscribe(life => this.life = life);
  }
   save(): void {
	   this.lifeService.updateLife(this.life)
	   .subscribe(() => this.goBack());
   }
  
  goBack(): void {
	  this.location.back();
	}
	setdefault(): void{
		if(this.life.type=='vitalidade'){
			this.life.value='0';
		}else if(this.life.type=='espiral'){
			this.life.value='0,0,0';
		}else{
			this.life.value='0,0,0,0,0,0';
		}
	}
	numerica(start:number, max:number): number[]{
		let resp=new Array();
		while(start<max){
			resp.push(start);
			start++;
		}
		return resp;
		//return new Array(max);
	}
	vitalityup(up:boolean): void{
		let novo=0;
		if(up){
			novo=(+this.life.value)+1;
		}else{
			novo=(+this.life.value)-1;
		}
		if(novo<0){novo=1};
		this.life.value=String(novo);
	}
}
