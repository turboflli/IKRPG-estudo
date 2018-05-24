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
	  const name = this.route.snapshot.paramMap.get('name'); // put (+) in front of this to converto to number
	  this.lifeService.getLife(name)
		.subscribe(life => this.life = life);
  }

}
