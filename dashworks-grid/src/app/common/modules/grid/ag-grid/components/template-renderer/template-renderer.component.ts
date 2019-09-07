import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  template: `<ng-container [ngTemplateOutlet]="params.templateRef" [ngTemplateOutletContext]="templateContext"></ng-container>`
})
export class AgGridTemplateRendererComponent implements ICellRendererAngularComp {

  params: any;
  templateContext: any;

  agInit(params: any): void {
    this.params = params;
    this.templateContext = {
      row: params.node.data,
      value: params.valueFormatted || params.value,
      ...(params.templateParams || {})
    };
  }

  refresh(): boolean {
    return false;
  }
}
