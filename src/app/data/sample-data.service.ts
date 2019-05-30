import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SampleData } from './sample-data.model';


@Injectable({
  providedIn: 'root'
})
export class SampleDataService {

  constructor(private http: HttpClient) { }

  getSampleData(): Observable<SampleData[]> {
    return this.http.get<SampleData[]>('api/sampleData');
  }

  postSampleData(data: SampleData): Observable<SampleData> {
    return this.http.post<SampleData>('api/sampleData', data);
  }
}
