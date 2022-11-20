import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pg1Component } from './pg1/pg1.component';
import { Inpg1Component } from './inpg1/inpg1.component';
import { PgComponent } from './pg1/pg/pg.component';

@NgModule({
  declarations: [
    AppComponent,
    Pg1Component,
    Inpg1Component,
    PgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
