import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngrx-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  turnOn = () =>
    console.log('On')

  turnOff = () =>
    console.log('Off')

  turnParameter = (onOff: boolean) =>
    console.log(onOff)

}
