import { Life } from '../Life';
import { MeeleWeapon } from '../meeleweapon';
import { RangeWeapon } from '../rangeweapon';
import { Ability } from '../ability';
import { Magic } from '../magic';
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
	private letras :String[] = ['x','o','R','L','M','C','A','G','S'];
	private vitalities:number[]=[];
	private time :number =0;
	
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
			this.life.magics = new Array();
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
	  this.life.id=undefined;
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
			this.life.value='0,0,0,0,0,0,0,0,0,0';
		}else{
			this.life.value='o,o,o,o,o,o;o,o,o,o,o,o;o,o,o,o,o,o;o,o,o,o,o,o;o,o,o,o,o,o;o,o,o,o,o,o;0;o,o,o,o,o,o;o,o,o,o,o,o;o,o,o,o,o,o;o,o,o,o,o,o;o,o,o,o,o,o;o,o,o,o,o,o';
		}
	}
	noMultipleBattleEngine():void{
		if(this.life.type=='vitalidade' && this.life.base=='huge'){
			while(this.vitalities.length>1){
				this.vitalities.pop();
			}
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
	getVitalities():number[]{
		if(this.vitalities.length<1){
			let vits=this.life.value.split(",");
			for(let i=0;i<vits.length;i++){
				this.vitalities.push(+vits[i]);
			}
		}
		return this.vitalities;
	}
	vitalityup(i:number,c:number): void{
		
		let cb=  <HTMLInputElement>  document.getElementById("cb"+i+c);
		if(cb.checked){
			this.vitalities[i]++;
		}else{
			this.vitalities[i]--;
		}
		
		this.life.value=this.vitalities.toString();
	}
	addVitality():void{
		let n:number =this.vitalities[this.vitalities.length-1];
		this.vitalities.push(n);
		this.life.value+=","+n;
	}
	delVitality():void{
		if(this.vitalities.length>1){
			this.vitalities.pop();
			this.life.value=this.life.value.substring(0,this.life.value.lastIndexOf(','));
		}
		
	}
	private checkSpiral(): void{
		if(this.spirals.length<1){
		
			let temp=this.life.value.split(',');
			//fis
			this.spirals[0]=+temp[0]
			this.spirals[1]=+temp[1]
			this.spirals[2]=+temp[2]
			//agi
			this.spirals[3]=+temp[3]
			this.spirals[4]=+temp[4]
			this.spirals[5]=+temp[5]
			//int
			this.spirals[6]=+temp[6]
			this.spirals[7]=+temp[7]
			this.spirals[8]=+temp[8]
			//field
			this.spirals[9]=+temp[9]
			
		
		}
	}
	getFis(n:number) : number{
		this.checkSpiral()
		if(n==undefined){
			return (this.spirals[0]+this.spirals[1]+this.spirals[2]);
		}else{
			return this.spirals[n];
		}
		
	}
	fisup(n:number,i:number): void{
		
		let cb=  <HTMLInputElement>  document.getElementById("cbf"+i);
		if(cb.checked){
			this.spirals[n]++;
		}else{
			this.spirals[n]--;
		}
		
		this.saveSpiral();
	}
	getAgi(n:number) : number{
		this.checkSpiral()
		if(n==undefined){
			return (this.spirals[3]+this.spirals[4]+this.spirals[5]);
		}else{
			return this.spirals[(n+3)];
		}
	}
	agiup(n:number,i:number): void{
		
		let cb=  <HTMLInputElement>  document.getElementById("cba"+i);
		if(cb.checked){
			this.spirals[(n+3)]++;
		}else{
			this.spirals[(n+3)]--;
		}
		
		this.saveSpiral();
	}
	getInt(n:number) : number{
		this.checkSpiral()
		if(n==undefined){
			return (this.spirals[6]+this.spirals[7]+this.spirals[8]);
		}else{
			return this.spirals[(n+6)];
		}
	}
	intup(n:number,i:number): void{
		
		let cb=  <HTMLInputElement>  document.getElementById("cbi"+i);
		if(cb.checked){
			this.spirals[(n+6)]++;
		}else{
			this.spirals[(n+6)]--;
		}
		
		this.saveSpiral();
	}
	getField() : number{
		this.checkSpiral()
		return this.spirals[9];
	}
	fieldup(i:number): void{
		
		let cb=  <HTMLInputElement>  document.getElementById("cbd"+i);
		if(cb.checked){
			this.spirals[9]++;
		}else{
			this.spirals[9]--;
		}
		
		this.saveSpiral();
	}
	private saveSpiral():void {
		this.life.value=this.spirals[0]+","+this.spirals[1]+","+this.spirals[2]+","+this.spirals[3];
		let novo="";
		for(let i=0;i<this.spirals.length;i++){
			novo+=this.spirals[i];
			if(i<this.spirals.length-1){
				novo+=",";
			}
		}
		this.life.value=novo;
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
			if(this.life.base=='huge'){
			if(l<6 && temp[0]=='o'){
				position++;
			}
			if(l>6 && temp[0]=='R'){
				position++;
			}
		}
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
		let secondnovo='';
		if(this.life.base=='huge'){
					for(let l=7;l<12;l++){
			for(let c=7;c<12;c++){
				secondnovo+=this.grid[l][c];
				if(c<11){
					secondnovo+=",";
				}
			}
			if(l<11){
				secondnovo+=";";
			}
		}
		}else{
			secondnovo=";o,o,o,o,o,o;o,o,o,o,o,o;o,o,o,o,o,o;o,o,o,o,o,o;o,o,o,o,o,o;o,o,o,o,o,o"
		}

		this.life.value=novo+";"+this.grid[6][0]+secondnovo;
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
	getBorder(i:number):number{
		i++;
		if(i%2==1){
			i++;
		}
		return (i/2);
	}
	
	callchoice(e){
		let temp=e.srcElement.id.substring(3).split('');
		let l=0;
		let c=0;
		if(temp.length==3){
			l=+(temp[0]+temp[1]);
			c=+temp[2];
		}else{
			l=+temp[0];
			c=+temp[1];
		}
		if(e.sourceCapabilities.firesTouchEvents){
			if(this.grid[l][c].indexOf('.')==-1){//não danificado
				if(this.grid[l][c]=='x'){
					this.changeButton(l,c);
				}else{
					this.damageButton(l,c);
				}
			}else{
				this.damageButton(l,c);
				this.changeButton(l,c);
			}
		}else{
			if(e.shiftKey || e.ctrlKey || e.which==3){
				this.damageButton(l,c);
			}else{
				this.changeButton(l,c);
			}
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
	addMagic(): void{
		let m=new Magic();
		this.life.magics.push(m);
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
	deleteMagic(m:Magic): void{
		this.life.magics = this.life.magics.filter(g => g !== m);
	}
}
