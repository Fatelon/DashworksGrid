import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thumbnails } from '../../../common/models/thumbnails';
import { YoutubeItem } from '../../../common/models/youtube-item';
import { YoutubeDataService } from '../../../common/services/youtube/youtube-data.service';

@Injectable()
export class AppGridDataController {

  youtubeData$: Observable<YoutubeItem[]> = this.youtubeDataService.getYoutubeItems();

  constructor(private youtubeDataService: YoutubeDataService) {
    console.log('new Thumbnails()', new Thumbnails());
    this.youtubeData$.subscribe(data => console.log('yoububeData', data));
  }
}
