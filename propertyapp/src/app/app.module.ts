import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyService } from './property.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AddComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    NgbModule, //.forRoot([])
    FormsModule
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
