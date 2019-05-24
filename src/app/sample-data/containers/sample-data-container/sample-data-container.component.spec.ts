import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDataContainerComponent } from './sample-data-container.component';

describe('SampleDataContainerComponent', () => {
  let component: SampleDataContainerComponent;
  let fixture: ComponentFixture<SampleDataContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleDataContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
