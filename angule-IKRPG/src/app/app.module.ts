import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { LifeComponent } from './life/life.component';
import { LifeDetailComponent } from './life-detail/life-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { LifeSearchComponent } from './life-search/life-search.component';
import { TutorialComponent } from './tutorial/tutorial.component';



@NgModule({
  declarations: [
    AppComponent,
    LifeComponent,
    LifeDetailComponent,
    MessagesComponent,
    DashboardComponent,
    LifeSearchComponent,
    TutorialComponent,
  ],
  imports: [
	  BrowserModule,
	  FormsModule,
	  AppRoutingModule,
	  HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
),


	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
