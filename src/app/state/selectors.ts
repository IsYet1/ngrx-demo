import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './index';


export const getAppState =
  createFeatureSelector<AppState>('app');

export const getExampleState = createSelector(
  getAppState,
  state => state.exampleStateBool
);

