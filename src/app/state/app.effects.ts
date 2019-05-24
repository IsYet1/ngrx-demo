import { Injectable } from '@angular/core';
import { map, tap, mergeMap, catchError } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionTypes } from './app.actions';
import * as actions from './app.actions';
import { SampleData } from 'src/app/data/sample-data.model';
import { SampleDataService } from 'src/app/data/sample-data.service';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {

  constructor(private actions$: Actions, private sampleDataService: SampleDataService) {}

  @Effect()
  setExampleStateInEffect$ = this.actions$.pipe(
    ofType<actions.ExampleStateOnEffect>(ActionTypes.ExampleStateOnEffect),
    tap(() => console.log('%c In the effect', 'color: green')),
    // Use map to return the action to set the example state on. Simple test.
    map(() => new actions.ExampleStateOn())
  );

  @Effect()
  loadSampleApiData$ = this.actions$.pipe(
    ofType<actions.SampleDataLoadRequest>(ActionTypes.SampleDataLoadRequest),
    mergeMap(() =>
    this.sampleDataService.getSampleData().pipe(
      map(sampleData => {
        return new actions.SampleDataLoadRequestSuccess(sampleData);
      }),
      catchError(err => of(new actions.SampleDataLoadRequestFail(err)))
    )
  ));

}
