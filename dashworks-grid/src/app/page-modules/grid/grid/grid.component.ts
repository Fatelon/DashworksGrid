import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { AppGridDataController } from '../_data-controller/data-controller';

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class AppGridPageComponent implements OnInit {

  private gridOptions: GridOptions;

  constructor(private dc: AppGridDataController) { }

  ngOnInit() {
  }

}
