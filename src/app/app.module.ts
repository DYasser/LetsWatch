import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppComponent } from './app.component';
import { CompRoutingModule } from './components/comp-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CompRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
