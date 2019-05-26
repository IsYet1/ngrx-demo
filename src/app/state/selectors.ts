import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './index';


export const getAppState =
  createFeatureSelector<AppState>('app');

export const getExampleState = createSelector(
  getAppState,
  state => state.exampleStateBool
);

export const getSampleData = createSelector(
  getAppState,
  state => state.sampleData
);

export const getCompanies = createSelector(
  getSampleData,
  sampleData => sampleData.map(item => item.company)
);

export const getUniqueCompanies = createSelector(
  getCompanies,
  companies => Array.from((new Set(companies)).values())
);

export const getCurrentCompany = createSelector(
  getAppState,
  state => state.currentCompany
);

