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
	infos:Info[]=[];
	
  ngOnInit() {
	  this.aba=this.route.snapshot.url[0].path;
	  this.getInfos(this.aba)
  }
	private getInfos(aba:string):void{
		this.infoService.getInfos(aba)
      .subscribe(infos => this.infos = infos);
	}
	getInfo(id:string):Info{
		id=this.aba+id;
		let info= this.infos.filter(i => i.id === id)[0];
		return info;
	}
	focalizar(id:string):void{
		if(id!=''){
			let element=  document.getElementById(id);
			if(element==undefined){
				document.querySelectorAll(id)[0].focus() ;
			//element2.focus();
			}else{
				element.focus();
			}
			
		}
	}
	focalizartag(tag:string):void{
		if(tag!=''){
			let element=  document.getElementsByTagName(tag)[0];
			element.focus();
		}
	}
}
