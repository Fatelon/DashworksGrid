import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatSlideToggleModule } from '@angular/material';
import { AppGridModule } from '../../common/modules/grid/grid.module';
import { AppTimePipe } from '../../common/modules/time/pipes/time.pipe';
import { AppTimeModule } from '../../common/modules/time/time.module';
import { AppGridDataController } from './_data-controller/data-controller';
import { AppGridPageComponent } from './grid/grid.component';
import { AppGridToolbarComponent } from './components/grid-toolbar/grid-toolbar.component';

@NgModule({
  declarations: [
    AppGridPageComponent,
    AppGridToolbarComponent
  ],
  imports: [
    CommonModule,
    AppGridModule,
    AppTimeModule,
    FormsModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ],
  exports: [
    AppGridPageComponent
  ],
  providers: [
    AppGridDataController,
    AppTimePipe
  ]
})
export class AppGridPageModule { }
