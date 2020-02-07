import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class SettingsComponent implements OnInit {

  constructor() {

  }

  lines = [{ line: 'Linia C0', active: false },
  { line: 'Linia C1', active: true },
  { line: 'Linia C2', active: false },
  { line: 'Linia C3', active: false },
  { line: 'Linia C4', active: false },
  { line: 'Linia C5', active: false },
  { line: 'Linia C6', active: false },
  { line: 'Linia C7', active: false }];

  list;

  ngOnInit() {
    this.list = localStorage.getItem('IRO123');
    console.log('got', this.list);


  }

  getC() {
    return true;
  }

  setValue(x) {
    localStorage.setItem('IRO123', JSON.stringify(this.lines));
  }



}
