import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  constructor() { }

  colors = [
   "Aqua","Black","Blue","BlueViolet","DarkKhaki","DarkSalmon","DeepSkyBlue"
  ];

  dropEvent(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.colors, event.previousIndex, event.currentIndex);
  }

  ngOnInit() {
  }

}
