import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatSelectModule,
  MatOptionModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './state/';
import { AppEffects } from './state/app.effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SampleDataApi } from './data/sample-data.api';


import { TestSampleDataComponent } from './data/test-sample-data/test-sample-data.component';
import { TestFormComponent } from './test-form/test-form.component';
import { TestOutputComponent } from './test-output/test-output.component';
import { SampleDataContainerComponent } from './sample-data/containers/sample-data-container/sample-data-container.component';
import { LoadDataComponent } from './sample-data/components/load-data/load-data.component';
import { CompanyListComponent } from './sample-data/components/company-list/company-list.component';
import { CompanyDetailsComponent } from './sample-data/components/company-details/company-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TestSampleDataComponent,
    TestFormComponent,
    TestOutputComponent,
    SampleDataContainerComponent,
    LoadDataComponent,
    CompanyListComponent,
    CompanyDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatSelectModule,
    MatOptionModule,
    FlexLayoutModule,

    HttpClientInMemoryWebApiModule.forRoot(SampleDataApi),
    AppRoutingModule,

    StoreModule.forRoot({app: appReducer}),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
