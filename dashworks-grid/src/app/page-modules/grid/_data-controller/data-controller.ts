import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { YoutubeItem } from '../../../common/models/youtube-item';
import { YoutubeDataService } from '../../../common/services/youtube/youtube-data.service';

@Injectable()
export class AppGridDataController {

  youtubeData$: Observable<YoutubeItem[]> = this.youtubeDataService.getYoutubeItems();

  constructor(private youtubeDataService: YoutubeDataService) {}
}
