import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grid-toolbar',
  templateUrl: './grid-toolbar.component.html',
  styleUrls: ['./grid-toolbar.component.scss']
})
export class AppGridToolbarComponent implements OnInit {

  @Input() selectionMode;
  @Input() totalRecordsCount;
  @Input() selectedRecordsCount;

  @Output() selectionModeChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSelectionModeChange(show) {
    this.selectionModeChange.emit(show);
  }

}
