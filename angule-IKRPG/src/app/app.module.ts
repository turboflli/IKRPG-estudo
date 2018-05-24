import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { LifeComponent } from './life/life.component';
import { LifeDetailComponent } from './life-detail/life-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeComponent,
    LifeDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
	  BrowserModule,
	  FormsModule,
	  AppRoutingModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
