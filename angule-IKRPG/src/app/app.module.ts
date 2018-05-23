import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { LifeComponent } from './life/life.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeComponent
  ],
  imports: [
	  BrowserModule,
	  FormsModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
