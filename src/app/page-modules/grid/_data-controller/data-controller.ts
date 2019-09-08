import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Record } from '../../../common/models/record';
import { RecordService } from '../../../common/services/record/record.service';

@Injectable()
export class AppGridDataController {

  youtubeData$: Observable<Record[]> = this.youtubeDataService.getYoutubeItems();

  constructor(private youtubeDataService: RecordService) {}
}
