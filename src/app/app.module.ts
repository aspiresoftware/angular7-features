import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSelectModule,MatFormFieldModule, MatInputModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VirtualScrollingComponent } from './components/virtual-scrolling/virtual-scrolling.component';
import { HomeComponent } from './components/home/home.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { NormalScrollComponent } from './components/normal-scroll/normal-scroll.component';
import { MatSelectComponent } from './components/mat-select/mat-select.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VirtualScrollingComponent,
    HomeComponent,
    DragDropComponent,
    NormalScrollComponent,
    MatSelectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ScrollingModule,
    DragDropModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule, 
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }