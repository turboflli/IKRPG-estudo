import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { LifeComponent } from './life/life.component';
import { LifeDetailComponent } from './life-detail/life-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeComponent,
    LifeDetailComponent
  ],
  imports: [
	  BrowserModule,
	  FormsModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
