import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [
    AppTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppTimePipe
  ]
})
export class AppTimeModule { }
