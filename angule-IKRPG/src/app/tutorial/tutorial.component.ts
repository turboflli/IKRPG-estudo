import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from '../info.service';
import { Info } from '../info';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  constructor( private route: ActivatedRoute,private infoService: InfoService) { }
	aba:string="dashboard";
	
	idioma:number=0;
	oi:Info;
	infosmatrix=new Array();
	
  ngOnInit() {
	  this.aba=this.route.snapshot.url[0].path;
	  this.getInfos(this.aba)
  }
	private getInfos(aba:string):void{
		this.infoService.getInfos(aba)
      .subscribe(infos => this.ordenai(infos));
	}
	/*getInfo(id:string):Info{
		id=this.aba+id;
		let info= this.infos.filter(i => i.id === id)[0];
		return info;
	}*/
	private ordenai(infos:Info[]):void{
		for(let i=0 ; i<infos.length ; i++){
			if(infos[i].pos == 0){
				this.oi=infos[i];
			}else{
				if(this.infosmatrix[infos[i].pos-1] == undefined){
					this.infosmatrix[infos[i].pos-1] = new Array();
				}
				this.infosmatrix[infos[i].pos-1].push(infos[i]);
			}
		}
	}
	focalizar(id:string):void{
		if(id!=''){
			let element=  document.getElementById(id);
				if(element != undefined){
					element.focus();
				}
		}
	}
	hide():void{
		let ul=document.getElementById("ulhelp");
		let img= <HTMLImageElement> document.getElementById("hideimg");
		
		if ( ul.classList.contains('hidden') ){
			ul.classList.remove('hidden');
			img.src="assets/open.png";
		}else{
			ul.classList.add('hidden');
			img.src="assets/arrow.png";
		}
	}
}
