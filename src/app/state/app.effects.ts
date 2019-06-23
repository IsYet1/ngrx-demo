import { Injectable } from '@angular/core';
import { map, tap, mergeMap, catchError, withLatestFrom, concatMap } from 'rxjs/operators';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';

import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/';
import * as appSelectors from 'src/app/state/selectors';
import * as appActions from 'src/app/state/app.actions';

import { ActionTypes } from './app.actions';
import * as actions from './app.actions';
import { SampleData } from 'src/app/data/sample-data.model';
import { SampleDataService } from 'src/app/data/sample-data.service';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {

  constructor(
    private actions$: Actions,
    private sampleDataService: SampleDataService,
    private store: Store<AppState>
    ) {}

  ExampleStateOnEffect8$ = createEffect(() => this.actions$.pipe(
    ofType(actions.ExampleStateOnEffect8),
    tap(() => console.log('%c In the load data 8 effect', 'color: green')),
    map(() => actions.ExampleStateOn8())
  ));

  SampleDataLoadRequest8 = createEffect(() => this.actions$.pipe(
    ofType(actions.SampleDataLoadRequest8),
    mergeMap(() =>
      this.sampleDataService.getSampleData().pipe(
        tap((sampleData) => console.log('%cSample data loaded', 'color: blue', sampleData)),
        map(sampleData =>
          actions.SampleDataLoadRequestSuccess8({sampleData})
        ),
        catchError(err =>
          of(actions.SampleDataLoadRequestFail8({errorInfo: err}))
        )
      )
    )
  ));

  SampleDataPostRequest$ = createEffect(() => this.actions$.pipe(
    ofType<actions.SampleDataPostRequest>(ActionTypes.SampleDataPostRequest),
    tap((action) => console.log('Post Effect action', action)),
    map(action => action.payload),
    concatMap((companyToAdd) =>
      this.sampleDataService.postSampleData(companyToAdd).pipe(
        tap((tapdata) => console.log('response from api post', tapdata)),
        map((newCompany: SampleData) =>
          (actions.SampleDataPostRequestSuccess({newCompany}))),
        catchError(err => of(new actions.SampleDataPostRequestFail(err))
        )
      ),
    )
  ));


  // @Effect()
  // loadSampleApiData$ = this.actions$.pipe(
  //   ofType<actions.SampleDataLoadRequest>(ActionTypes.SampleDataLoadRequest),
  //   mergeMap(() =>
  //   this.sampleDataService.getSampleData().pipe(
  //     map(sampleData => {
  //       return new actions.SampleDataLoadRequestSuccess(sampleData);
  //     }),
  //     catchError(err => of(new actions.SampleDataLoadRequestFail(err)))
  //   )
  // ));

  // @Effect()
  // postSampleApiData$ = this.actions$.pipe(
  //   ofType<actions.SampleDataPostRequest>(ActionTypes.SampleDataPostRequest),
  //   tap((action) => console.log('Post Effect action', action)),
  //   map(action => action.payload),
  //   concatMap((companyToAdd) =>
  //     this.sampleDataService.postSampleData(companyToAdd).pipe(
  //       tap((tapdata) => console.log('response from api post', tapdata)),
  //       map((newCompany) => (actions.SampleDataPostRequestSuccess({newCompany}))),
  //       catchError(err => of(new actions.SampleDataPostRequestFail(err))
  //       )
  //     ),
  //   )
  // );

  @Effect()
  postSampleApiDataCurCompany$ = this.actions$.pipe(
    ofType<actions.SampleDataPostRequestCurCompany>(ActionTypes.SampleDataPostRequestCurCompany),
    withLatestFrom(this.store.pipe(select(appSelectors.getCurrentCompany))),
    map(([action, curCompany]) => ({...action.payload, company: curCompany})),
    tap((dataToPost) => console.log('%c Post Effect action', 'color: green', dataToPost)),
    concatMap((dataToPost) =>
      this.sampleDataService.postSampleData(dataToPost).pipe(
        tap((tapdata) => console.log('response from curCompany api post', tapdata)),
        map((resp) => (new actions.SampleDataPostRequestCurCompanySuccess(resp))),
        catchError(err => of(new actions.SampleDataPostRequestCurCompanyFail(err))
        )
      ),
    )
  );

}
