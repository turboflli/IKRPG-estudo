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
      .subscribe(lifes => this.lifes = lifes.slice(0, 2));
  }
}