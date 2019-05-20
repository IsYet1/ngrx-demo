import { Component, OnInit } from '@angular/core';

import { SampleDataService } from '../sample-data.service';


@Component({
  selector: 'ngrx-test-sample-data',
  templateUrl: './test-sample-data.component.html',
  styleUrls: ['./test-sample-data.component.scss']
})
export class TestSampleDataComponent implements OnInit {

  constructor(private sampleDataService: SampleDataService) { }

  ngOnInit() {
    const sampleData = this.sampleDataService.getSampleData();
    sampleData.subscribe(data => console.log('%c Sample Data', 'color: blue;', data) );
  }

}
