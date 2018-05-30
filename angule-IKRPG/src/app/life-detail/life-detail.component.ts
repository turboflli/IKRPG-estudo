import { Life } from '../Life';
import { MeeleWeapon } from '../meeleweapon';
import { RangeWeapon } from '../rangeweapon';
import { Ability } from '../ability';
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
	private grid = new Array();
	private letras :String[] = ['x','o','d','e','m','c','a','g'];
	
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
	  if(id==0){
		  this.life=new Life();//({ 'mob', 'vitalidade', '0',[],[],'10','12','11','8' } as Life);
		  	this.life.rangeweapons = new Array();
			this.life.melleweapons = new Array();
			this.life.abilities = new Array();
	  }else{
		  	  this.lifeService.getLife(id)
		.subscribe(life => this.life = life);
	  }
		
  }
   save(): void {
	   this.lifeService.updateLife(this.life)
	   .subscribe(() => this.goBack());
   }
  add(): void{
	  this.lifeService.addLife(this.life).subscribe(life => {
		this.life=life;
	});
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
			this.life.value='o,o,o,o,o,o;o,o,o,o,o,o;o,o,o,o,o,o;o,o,o,o,o,o;o,o,o,o,o,o;o,o,o,o,o,o;0';
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
	
	private checkGrid(): void{
		if(this.grid.length<1){
			let temp=this.life.value.split(';');
			for(let i=0;i<temp.length;i++){
				this.grid.push(temp[i].split(','));
			}
		}
	}
	getColumn(i:number): String[]{
		this.checkGrid();
		return this.grid[i];
	}
	getGField() : number{
		this.checkGrid();
		return +this.grid[6][0];
	}
	Gfieldup(i:number): void{
		let novo=+this.grid[6][0];
		let cb=  <HTMLInputElement>  document.getElementById("cbgd"+i);
		if(cb.checked){
			novo++;
		}else{
			novo--;
		}
		this.grid[6][0]=""+novo;
		this.savegrid();
		
	}
	changeButton(l:number,c:number): void{
		let temp=this.grid[l][c];
		let position=this.letras.indexOf(temp[0]);
		if(position==this.letras.length-1){
			position=0;
		}else{
			position++;
		}
		this.grid[l][c]=this.letras[position];
		this.savegrid();
	}
	private savegrid(): void{
		let novo='';
		for(let l=0;l<6;l++){
			for(let c=0;c<6;c++){
				novo+=this.grid[l][c];
				if(c<5){
					novo+=",";
				}
			}
			if(l<5){
				novo+=";";
			}
		}
		this.life.value=novo+";"+this.grid[6][0];
	}
	damageButton(l:number,c:number): void{
		if(this.grid[l][c].indexOf('.')!=-1){
			this.grid[l][c]=this.grid[l][c][0];
		}else{
			this.grid[l][c]+='.';
		}
		this.savegrid();
		/*let btn=document.getElementById("btn"+l+c);
		if ( btn.classList.contains('damaged') ){
			btn.classList.remove('damaged');
		}else{
			btn.classList.add('damaged');
		}*/
	}
	callchoice(e){
		let temp=e.srcElement.id.substring(3).split('');
		let l=+temp[0];
		let c=+temp[1];
		if(e.shiftKey || e.ctrlKey){
			this.damageButton(l,c);
		}else{
			this.changeButton(l,c);
		}
	}
	addMeeleWepon(): void{
		let mw=new MeeleWeapon();
		this.life.melleweapons.push(mw);
	}
	addRageWepon(): void{
		let rw=new RangeWeapon();
		this.life.rangeweapons.push(rw);
	}
	addAbility(): void{
		let a=new Ability();
		this.life.abilities.push(a);
	}
	deleteMeeleWeapon(mw:MeeleWeapon): void{
		this.life.melleweapons = this.life.melleweapons.filter(m => m !== mw);
	}
	deleteRangeWeapon(rw:RangeWeapon): void{
		this.life.rangeweapons = this.life.rangeweapons.filter(r => r !== rw);
	}
	deleteAbility(a:Ability): void{
		this.life.abilities = this.life.abilities.filter(h => h !== a);
	}
}
