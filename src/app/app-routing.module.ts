import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtualScrollingComponent } from './components/virtual-scrolling/virtual-scrolling.component';
import { HomeComponent } from './components/home/home.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { NormalScrollComponent } from './components/normal-scroll/normal-scroll.component';
import { MatSelectComponent } from './components/mat-select/mat-select.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'normal-scrolling', component: NormalScrollComponent},
  { path: 'virtual-scrolling', component: VirtualScrollingComponent},
  { path: 'drag-drop', component: DragDropComponent},
  { path: 'mat-select', component: MatSelectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
