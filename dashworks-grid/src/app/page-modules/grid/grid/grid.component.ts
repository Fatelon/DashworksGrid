import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { YoutubeItem } from '../../../common/models/youtube-item';
import { AppGridDataController } from '../_data-controller/data-controller';

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class AppGridPageComponent implements OnInit {

  private gridOptions: GridOptions;
  private youtubeData$: Observable<YoutubeItem[]> = this.dc.youtubeData$;
  private rowSelection = 'multiple';

  // additional customization
  private pageSize = 10;
  private pagination = true;
  private enableSorting = true;
  private enableColResize = true;

  constructor(private dc: AppGridDataController) {
    this.gridOptions = <GridOptions>{};

    this.gridOptions.columnDefs = [
      {
        headerName: '',
        field: 'thumbnails.default.url',
        suppressSorting: true
      },
      {
        headerName: 'Published on',
        field: 'publishedAt',
        comparator: this.dateComparator
      },
      {
        headerName: 'Video Title',
        field: 'title',
      },
      {
        headerName: 'Description',
        field: 'description',
        suppressSorting: true
      },

    ];
  }

  ngOnInit() {
  }

  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }

  dateComparator = (date1, date2) => (new Date(date2)).getTime() - (new Date(date1)).getTime();

}
