import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridTemplateRendererComponent } from './ag-grid/components/template-renderer/template-renderer.component';
import { AgGridCheckboxHeaderComponent } from './ag-grid/components/checkbox-header/checkbox-header.component';

@NgModule({
  declarations: [
    AgGridTemplateRendererComponent,
    AgGridCheckboxHeaderComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([
      AgGridTemplateRendererComponent,
      AgGridCheckboxHeaderComponent
    ]),
    FormsModule,
    MatCheckboxModule
  ],
  exports: [
    AgGridModule
  ]
})
export class AppGridModule { }
