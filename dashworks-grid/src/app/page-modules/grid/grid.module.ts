import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppGridModule } from '../../common/modules/grid/grid.module';
import { AppGridDataController } from './_data-controller/data-controller';
import { AppGridPageComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppGridPageComponent
  ],
  imports: [
    CommonModule,
    AppGridModule
  ],
  exports: [
    AppGridPageComponent
  ],
  providers: [
    AppGridDataController
  ]
})
export class AppGridPageModule { }
