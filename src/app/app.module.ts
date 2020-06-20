import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { Access404Component } from './components/access404/access404.component';
import { AlternativeContentComponent } from './components/alternative-content/alternative-content.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    Access404Component,
    AlternativeContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
