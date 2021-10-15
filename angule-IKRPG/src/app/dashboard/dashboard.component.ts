import { Component, OnInit } from '@angular/core';
import { Life } from '../Life';
import { LifeService } from '../life.service';
import { Iniciativa } from '../iniciativa';
import { IniciativaService } from '../iniciativa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  lifes: Life[] = [];
	inics:Iniciativa[]=[];
	ordenedinics=new Array();
	fileselected: File = undefined;
  constructor(private lifeService: LifeService,private iniciativaService: IniciativaService) { }

  ngOnInit() {
    this.getLifes();
    this.getInics();
   
  }
  private start(inics:Iniciativa[]):void{
   for(let l=0;l<inics.length;l++){
    	this.ordenedinics[inics[l].id]=inics[l].names;
    }
    this.sort();
  }
  private sort():void{
 	this.inics=[];
	  for(let i=this.ordenedinics.length-1;i>=0;i--){
		  if(this.ordenedinics[i]!=undefined){
			  let names=this.ordenedinics[i];
			  let id=i;
			  let newinic={id,names} as Iniciativa;
			  this.inics.push(newinic);
		  }
	  }
  }
  getLifes(): void {
    this.lifeService.getLifes()
      .subscribe(lifes => this.lifes = lifes);//.slice(0, 2)
  }
   getInics() {
    this.iniciativaService.getInics()
    .subscribe(iniciativas => this.start(iniciativas));
  }
  saveTextAsFile ( ):void{
	  
	  let namefile=  <HTMLInputElement>  document.getElementById("namefile");
	  let filename=namefile.value;
	let data=JSON.stringify(this.lifes);

        let blob = new Blob([data], {type: 'application/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')
// FOR IE:

  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, filename);
  }
  else{
      let e = document.createEvent('MouseEvents'),
          a = document.createElement('a');

      a.download = filename;
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['application/json', a.download, a.href].join(':');
      e.initEvent('click', true,false );/*, window,
          0, 0, 0, 0, 0, false, false, false, false, 0, null);*/
      a.dispatchEvent(e);
  }
}



  readtext(): void {
    let importedfile = <HTMLInputElement>document.getElementById("importedfile");
    let reader = new FileReader();

    reader.onloadend = function (e) {
      var target: any = e.target;
      var data = target.result;
      this.importLifes(data);
    }.bind(this);
    reader.readAsText(importedfile.files[0]);


  }

  importLifes(data: string): void{
	 let importedlifes=JSON.parse(data);
	  for(let i=0;i<importedlifes.length;i++){
		  let newlife=importedlifes[i];
		  if(this.lifes.length>0){
			  newlife.id=undefined;
		  }
		  this.add(newlife);
	  }
	  this.fileselected = undefined;
  }
  private add(l:Life): void{
	  this.lifeService.addLife(l).subscribe(life => {
		l=life;
	});
  }
  /* não funciona
  deleteAll(): void{
	  let listId=new Array();
	  for(let i=0;i<this.lifes.length;i++){
		listId.push(this.lifes[i].id);
	  }
	  for(let i=0;i<listId.length;i++){
		
		this.lifeService.deleteLife(listId[i]).subscribe();
		
	  }
	  
	   
  }*/
  addInic():void{
	  let pos=  <HTMLInputElement>  document.getElementById("inicvalue");
	  let name=  <HTMLInputElement>  document.getElementById("inicname");
	  if(this.ordenedinics[+pos.value]==undefined){
		  this.ordenedinics[+pos.value]=new Array();
	  }
	  this.ordenedinics[+pos.value].push(name.value);
	 this.sort();

	  //não pode ficar dentro do for
	  let names=this.ordenedinics[+pos.value];
	  let id=+pos.value;
	  let newinic={id,names} as Iniciativa;
	  if(names.length>1){
	   this.iniciativaService.updateInic(newinic)
	   .subscribe();
	  }else{
	  	  this.iniciativaService.addInic(newinic).subscribe(inic => {
			newinic=inic;
		});
	  }



	 /* let pos=  <HTMLInputElement>  document.getElementById("inicvalue");
	  let name=  <HTMLInputElement>  document.getElementById("inicname");
	  let has=false;
	  for(let i=0;i<this.inics.length;i++){
		  if(this.inics[i].value==+pos.value){
			  this.inics[i].names.push(name.value);
			  has=true;
			  break;
		  }
	  }
	  if(!has){
		  let value:number =+pos.value;
		  let names:String[]=[];
		  names.push(name.value);
		  this.inics.push({value,names} as Iniciativa);
	  }*/
  }
  clearInic():void{
  	  for(let l=0;l<this.inics.length;l++){
  	  	  this.iniciativaService.deleteInic(this.inics[l].id).subscribe();
  	  }
	  this.inics=[];
	  this.ordenedinics=[];
  }
  
}