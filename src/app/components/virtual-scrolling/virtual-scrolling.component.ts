import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scrolling',
  templateUrl: './virtual-scrolling.component.html',
  styleUrls: ['./virtual-scrolling.component.scss']
})
export class VirtualScrollingComponent implements OnInit {

  constructor() { }

  arr = Array.from({length: 10000}).map((el,i) => `Option: ${++i}`);

  ngOnInit() {
  }

}
