import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Record } from '../../../common/models/record';
import { AgGridCheckboxHeaderComponent } from '../../../common/modules/grid/ag-grid/components/checkbox-header/checkbox-header.component';
import { AgGridHelper } from '../../../common/modules/grid/ag-grid/services/ag-grid-helper';
import { AppTimePipe } from '../../../common/modules/time/pipes/time.pipe';
import { AppGridDataController } from '../_data-controller/data-controller';

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppGridPageComponent implements OnInit {

  @ViewChild('customCheckboxCell', { static: true }) customCheckboxCell: TemplateRef<any>;
  @ViewChild('customThumbnailsCell', { static: true }) customThumbnailsCell: TemplateRef<any>;
  @ViewChild('customVideoTitleCell', { static: true }) customVideoTitleCell: TemplateRef<any>;

  private YOUTUBE_STATIC_LINC_PART = 'https://www.youtube.com/watch?v=';

  gridOptions: GridOptions;
  rowSelection = 'multiple';
  youtubeData$: Observable<Record[]> = this.dc.youtubeData$;

  // Additional customization
  private imgVerticalMargin = 5; // X px for top and X px for bottom
  private commonCellStyle = {
    'display': 'flex',
    'align-items': 'center',
    'white-space': 'normal',
    'line-height': 'unset',
    'overflow': 'auto'
  };
  pageSize = 5;
  pagination = true;
  rowDeselection = true;
  selectionMode = true;
  suppressRowClickSelection = this.selectionMode;
  selectedRowsCount;
  checkboxesModel = {};

  constructor(private dc: AppGridDataController,
              private agGridHelper: AgGridHelper,
              private appTimePipe: AppTimePipe) {}

  ngOnInit() {
    // Init gridOptions there because of TemplateRef usage
    this.gridOptions = <GridOptions>{
      columnDefs: [
        {
          headerName: '',
          field: 'checkbox',
          width: 40,
          resizable: false,
          cellStyle: { 'display': 'flex', 'align-items': 'center' },
          headerComponentFramework: AgGridCheckboxHeaderComponent,
          ...this.agGridHelper.renderWithTemplate(this.customCheckboxCell),
          hide: !this.selectionMode
        }, {
          headerName: '',
          field: 'thumbnails.default.url',
          width: 100,
          menuTabs: [],
          cellStyle: { margin: this.imgVerticalMargin + 'px 0' },
          ...this.agGridHelper.renderWithTemplate(this.customThumbnailsCell)
        }, {
          headerName: 'Published on',
          field: 'publishedAt',
          width: 100,
          menuTabs: [],
          sortable: true,
          cellStyle: this.commonCellStyle,
          comparator: this.dateComparator,
          valueFormatter: (p) => this.appTimePipe.transform(p.value, true)
        }, {
          headerName: 'Video Title',
          field: 'title',
          menuTabs: [],
          sortable: true,
          cellStyle: this.commonCellStyle,
          ...this.agGridHelper.renderWithTemplate(this.customVideoTitleCell)
        }, {
          headerName: 'Description',
          field: 'description',
          menuTabs: [],
          width: 250,
          cellStyle: this.commonCellStyle
        }
      ],
      getMainMenuItems: () => [],
      getContextMenuItems: this.getContextMenuItems,
      getRowHeight: (params) =>
        this.getThumbnailsSize(params.data, 'height') + this.imgVerticalMargin * 2,
      suppressCellSelection: true
    };
  }

  onGridReady() {
    this.gridOptions.api.sizeColumnsToFit();
  }

  onSelectionChanged(event) {
    this.selectedRowsCount = event.api.getSelectedRows().length;
    Object.keys(this.checkboxesModel).forEach((key) => this.checkboxesModel[key] = false);
    event.api.getSelectedRows().forEach(row => this.checkboxesModel[row.id] = true);
  }

  onGridSizeChanged(params) {
    params.api.sizeColumnsToFit();
  }

  onSelectionModeChange(show) {
    this.suppressRowClickSelection = show;
    this.gridOptions.columnApi.setColumnVisible('checkbox', show);
    this.customResize();
  }

  onRowCheckboxChange(id) {
    if (!id) { return; }
    this.gridOptions.api.forEachNode((node) => {
      if (node.data.id === id) {
        node.setSelected(!this.checkboxesModel[id]);
      }
    });
  }

  customResize() {
    // Need a double resize to remove extra scrolling
    this.gridOptions.api.sizeColumnsToFit();
    setTimeout(() => this.gridOptions.api.sizeColumnsToFit());
  }

  getContextMenuItems = (params) => ([
    {
      name: 'Open in new tab',
      action: () => {
        if (!params || !params.node || !params.node.data) { return; }
        window.open(this.genYoutubeLink(params.node.data.videoId), "_blank");
      }
    },
    'separator',
    'copy',
    'copyWithHeaders',
    'paste'
  ]);


  // Simplifications
  dateComparator = (date1, date2) => (new Date(date2)).getTime() - (new Date(date1)).getTime();

  genYoutubeLink = (videoId = '') => this.YOUTUBE_STATIC_LINC_PART + videoId;

  checkThumbnailsParam = (row, param) =>
    row && row.thumbnails && row.thumbnails.default && row.thumbnails.default[param];

  getThumbnailsUrl = (row: Record) =>
    this.checkThumbnailsParam(row, 'url') ? row.thumbnails.default.url : '';

  getThumbnailsSize = (row: Record, param: string) =>
    (this.checkThumbnailsParam(row, param) ? row.thumbnails.default[param] : 100);

  getThumbnailsSizePx = (row: Record, param: string) => this.getThumbnailsSize(row, param) + 'px';
}
