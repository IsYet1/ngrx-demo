import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState8 } from './index';


export const getAppState8 =
  createFeatureSelector<AppState8>('app8');

export const getExampleState8 = createSelector(
  getAppState8,
  state => state.exampleStateBool
);

export const getSampleData8 = createSelector(
  getAppState8,
  state => state.sampleData
);

export const getCompanies8 = createSelector(
  getSampleData8,
  sampleData => sampleData.map(item => item.company)
);

export const getUniqueCompanies8 = createSelector(
  getCompanies8,
  companies => Array.from((new Set(companies)).values())
);

export const getCurrentCompany8 = createSelector(
  getAppState8,
  state => state.currentCompany
);

export const getCompanyDetails8 = createSelector(
  getAppState8,
  state =>
    state.sampleData
    .filter(co => co.company === state.currentCompany)
);

