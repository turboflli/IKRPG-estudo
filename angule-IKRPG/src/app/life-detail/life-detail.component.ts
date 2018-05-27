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
	private spirals = new Array();
	
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
	vitalityup(i:number): void{
		let novo=0;
		let cb=  <HTMLInputElement>  document.getElementById("cb"+i);
		if(cb.checked){
			novo=(+this.life.value)+1;
		}else{
			novo=(+this.life.value)-1;
		}
		if(novo<0){novo=1};
		this.life.value=String(novo);
	}
	private checkSpiral(): void{
		if(this.spirals.length<1){
		
			let temp=this.life.value.split(',');
			this.spirals[0]=+temp[0]
			this.spirals[1]=+temp[1]
			this.spirals[2]=+temp[2]
			this.spirals[3]=+temp[3]
		
		}
	}
	getFis() : number{
		this.checkSpiral()
		return this.spirals[0];
	}
	fisup(i:number): void{
		
		let cb=  <HTMLInputElement>  document.getElementById("cbf"+i);
		if(cb.checked){
			this.spirals[0]++;
		}else{
			this.spirals[0]--;
		}
		
		this.life.value=this.spirals[0]+","+this.spirals[1]+","+this.spirals[2]+","+this.spirals[3];
	}
	getAgi() : number{
		this.checkSpiral()
		return this.spirals[1];		
	}
	agiup(i:number): void{
		
		let cb=  <HTMLInputElement>  document.getElementById("cba"+i);
		if(cb.checked){
			this.spirals[1]++;
		}else{
			this.spirals[1]--;
		}
		
		this.life.value=this.spirals[0]+","+this.spirals[1]+","+this.spirals[2]+","+this.spirals[3];
	}
	getInt() : number{
		this.checkSpiral()
		return this.spirals[2];
	}
	intup(i:number): void{
		
		let cb=  <HTMLInputElement>  document.getElementById("cbi"+i);
		if(cb.checked){
			this.spirals[2]++;
		}else{
			this.spirals[2]--;
		}
		
		this.life.value=this.spirals[0]+","+this.spirals[1]+","+this.spirals[2]+","+this.spirals[3];
	}
	getField() : number{
		this.checkSpiral()
		return this.spirals[3];
	}
	fieldup(i:number): void{
		
		let cb=  <HTMLInputElement>  document.getElementById("cbd"+i);
		if(cb.checked){
			this.spirals[3]++;
		}else{
			this.spirals[3]--;
		}
		
		this.life.value=this.spirals[0]+","+this.spirals[1]+","+this.spirals[2]+","+this.spirals[3];
	}

	/*vitalityup(up:boolean): void{
		let novo=0;
		if(up){
			novo=(+this.life.value)+1;
		}else{
			novo=(+this.life.value)-1;
		}
		if(novo<0){novo=1};
		this.life.value=String(novo);
	}*/
	
}
