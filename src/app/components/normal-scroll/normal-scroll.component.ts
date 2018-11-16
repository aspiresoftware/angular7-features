import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-scroll',
  templateUrl: './normal-scroll.component.html',
  styleUrls: ['./normal-scroll.component.scss']
})
export class NormalScrollComponent implements OnInit {

  constructor() { }

  items = Array.from({length: 100000}).map((_, i) => `Option: ${++i}`);
  
  ngOnInit() {
  }

}
