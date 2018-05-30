import { Component, OnInit } from '@angular/core';
import { Life } from '../Life';
import { LifeService } from '../life.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  lifes: Life[] = [];

  constructor(private lifeService: LifeService) { }

  ngOnInit() {
    this.getLifes();
  }

  getLifes(): void {
    this.lifeService.getLifes()
      .subscribe(lifes => this.lifes = lifes);//.slice(0, 2)
  }
  
  saveTextAsFile ( filename):void{
	let data=JSON.stringify(this.lifes);

        let blob = new Blob([data], {type: 'text/plain'}),
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
      a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
      e.initEvent('click', true,false );/*, window,
          0, 0, 0, 0, 0, false, false, false, false, 0, null);*/
      a.dispatchEvent(e);
  }
}
  readtext():void{
	  let importedfile=  <HTMLInputElement>  document.getElementById("importedfile");
	let reader = new FileReader();
	reader.onloadend = function (e) {
        var target: any = e.target;
        var data = target.result;
		let arearesp=  <HTMLInputElement>  document.getElementById("arearesp");
		arearesp.value=data;

    };
    reader.readAsText(importedfile.files[0]);
	let arearesp=  <HTMLInputElement>  document.getElementById("arearesp");
	 let importedlifes=JSON.parse(arearesp.value);
	  for(let i=0;i<importedlifes.length;i++){
		  this.add(importedlifes[i]);
	  }
	 
  }
  private add(l:Life): void{
	  this.lifeService.addLife(l).subscribe(life => {
		l=life;
	});
  }
}