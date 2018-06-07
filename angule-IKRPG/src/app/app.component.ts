import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'IKRPG GM Sheet Control';
  private backcount=1;
  private backmax=3;
  ngOnInit() {
  document.body.style.background="URL(assets/back1.jpg)";
  document.body.style.backgroundSize="cover";
	 setInterval(() => {
       this.changeBack(); 
     }, 5000); 
	/*setInterval(
	this.changeBack()
	,2000);   */
  }
  private changeBack():void{
  	if(this.backcount==this.backmax){
  		this.backcount=1;
  	}else{
  		this.backcount++;
  	}
  	let image="URL(assets/back"+this.backcount+".jpg)";
  	document.body.style.background=image;
  	document.body.style.backgroundSize="cover";
  }
}
