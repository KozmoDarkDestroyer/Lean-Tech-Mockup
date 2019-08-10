import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TravelsComponent } from './components/travels/travels.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { SmartFiltersComponent } from './components/smart-filters/smart-filters.component';
import { FiltersComponent } from './components/filters/filters.component';
import { OkComponent } from './components/ok/ok.component';
import { DeliveredComponent } from './components/delivered/delivered.component';
import { PlusComponent } from './components/plus/plus.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TravelsComponent,
    SearchComponent,
    HomeComponent,
    SmartFiltersComponent,
    FiltersComponent,
    OkComponent,
    DeliveredComponent,
    PlusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
