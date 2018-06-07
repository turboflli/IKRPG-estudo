import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifeComponent }      from './life/life.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { LifeDetailComponent }  from './life-detail/life-detail.component';
import { TutorialComponent }      from './tutorial/tutorial.component';

const routes: Routes = [
	  { path: 'life', component: LifeComponent,outlet:'primary',
	  children:[
		{ path: 'detail/:id', redirectTo: '/detail/:id(tutorial:detail)', pathMatch: 'full' },
	  ] },
	  { path: 'dashboard', component: DashboardComponent,outlet:'primary'  },
	  { path: 'life', component: TutorialComponent,outlet:'tutorial' 
	  },
	  { path: 'dashboard', component: TutorialComponent,outlet:'tutorial'  },
	  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	  { path: 'detail/:id', component: LifeDetailComponent,outlet:'primary'  },
	  { path: 'detail', component: TutorialComponent,outlet:'tutorial'  }
	  /*,children:[
      {
        path: '',
        component: TutorialComponent, 
        outlet:'tutorial'
      }]*/
	];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {
	
	
}
