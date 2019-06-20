import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, AppState8 } from './index';


export const getAppState8 =
  createFeatureSelector<AppState8>('app8');

export const getExampleState8 = createSelector(
  getAppState8,
  state => state.exampleStateBool
);

export const getAppState =
  createFeatureSelector<AppState>('app');

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

export const getCompanyDetails = createSelector(
  getAppState,
  state =>
    state.sampleData
    .filter(co => co.company === state.currentCompany)
);
