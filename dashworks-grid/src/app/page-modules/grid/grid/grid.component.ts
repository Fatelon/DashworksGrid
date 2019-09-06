import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class AppGridPageComponent implements OnInit {

  private gridOptions: GridOptions;

  constructor() { }

  ngOnInit() {
  }

}
