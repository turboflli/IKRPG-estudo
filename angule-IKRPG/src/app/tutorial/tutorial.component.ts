import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  constructor( private route: ActivatedRoute,private infoService: InfoService) { }
	aba:String="dashboard";
  ngOnInit() {
	  this.aba=this.route.snapshot.url[0].path;
  }

}
