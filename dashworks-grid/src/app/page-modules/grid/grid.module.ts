import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppGridComponent } from './grid/grid.component';
import {AppGridDataController} from "./_data-controller/data-controller";

@NgModule({
  declarations: [
    AppGridComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppGridComponent
  ],
  providers: [
    AppGridDataController
  ]
})
export class AppGridModule { }
