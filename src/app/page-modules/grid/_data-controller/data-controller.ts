import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Record } from '../../../common/models/record';
import { RecordsService } from '../../../common/services/record/records.service';

@Injectable()
export class AppGridDataController {

  youtubeData$: Observable<Record[]> = this.youtubeDataService.getRecords();

  constructor(private youtubeDataService: RecordsService) {}
}
