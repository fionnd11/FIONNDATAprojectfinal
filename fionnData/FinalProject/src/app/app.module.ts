import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {
MatInputModule,
MatCardModule,
MatButtonModule,
MatToolbarModule,
MatExpansionModule,
MatNativeDateModule,
MatDatepickerModule
} from '@angular/material';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { EditComponent } from './edit/edit.component';
import {FormsModule} from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsComponent } from './news/news.component';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    EditComponent,
    HomePageComponent,
    NewsComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxTwitterTimelineModule,
    BrowserAnimationsModule,
    MatCardModule,
MatButtonModule,
MatToolbarModule,
MatExpansionModule,
MatInputModule,
MatDatepickerModule,
MatNativeDateModule,
FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
