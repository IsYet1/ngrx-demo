import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SampleDataApi } from './data/sample-data.api';

import { appReducer } from './state/';

import { TestSampleDataComponent } from './data/test-sample-data/test-sample-data.component';

@NgModule({
  declarations: [
    AppComponent,
    TestSampleDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(SampleDataApi),
    AppRoutingModule,
    StoreModule.forRoot({app: appReducer}),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
