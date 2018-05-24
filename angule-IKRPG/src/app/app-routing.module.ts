import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifeComponent }      from './life/life.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { LifeDetailComponent }  from './life-detail/life-detail.component';

const routes: Routes = [
	  { path: 'life', component: LifeComponent },
	  { path: 'dashboard', component: DashboardComponent },
	  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	  { path: 'detail/:name', component: LifeDetailComponent }
	];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {
	
	
}
