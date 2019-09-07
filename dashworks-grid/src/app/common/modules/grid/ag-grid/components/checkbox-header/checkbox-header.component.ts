import { Component, OnDestroy } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';

@Component({
  templateUrl: './checkbox-header.component.html'
})
export class AgGridCheckboxHeaderComponent implements IHeaderAngularComp, OnDestroy {

  private params;
  private selectionEventListener;

  checkboxModel = false;

  agInit(params): void {
    this.params = params;
    this.onSelectionChanged();
    this.selectionEventListener = this.onSelectionChanged.bind(this);
    this.params.api.addEventListener('selectionChanged', this.selectionEventListener);
  }

  onSelectionChanged() {
    const displayedRowsCount = this.params.api.getDisplayedRowCount();
    const selectedRowsCount = this.params.api.getSelectedRows().length;
    this.checkboxModel = !!displayedRowsCount && !(displayedRowsCount - selectedRowsCount);
  }

  onCheckboxChanged(checked) {
    if (!this.params || !this.params.api) { return; }
    if (checked) {
      this.params.api.selectAll();
    } else {
      this.params.api.deselectAll();
    }
  }

  ngOnDestroy() {
    this.params.api.removeEventListener('selectionChanged', this.selectionEventListener);
  }
}
