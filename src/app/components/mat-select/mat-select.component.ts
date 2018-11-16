import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-select',
  templateUrl: './mat-select.component.html',
  styleUrls: ['./mat-select.component.scss']
})
export class MatSelectComponent implements OnInit {

  constructor() { }

  selectedValue: string;
  selectedFruit: string;

  colors: String[] = [
     "AliceBlue","Aqua","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","DarkGreen","DarkKhaki","DarkRed","DarkSalmon","DeepSkyBlue"
  ];

  fruits: String[] = ["Apple", "Orange", "Plum", "Guava", "Banana", "Grapes", "Pineapple"];
  
  ngOnInit() {
  }

}
