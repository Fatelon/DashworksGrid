import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { YoutubeItem } from '../../models/youtube-item';

@Injectable({
  providedIn: 'root'
})
export class YoutubeDataService {

  DATA_URL =
    'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDOfT_BO81a' +
    'EZScosfTYMruJobmpjqNeEk&maxResults=50&type=video&part=snippet&q=john';

  constructor(private httpClient: HttpClient) { }

  public getYoutubeItems(): Observable<YoutubeItem[]> {
    return this.httpClient
      .get<any>(`${this.DATA_URL}`)
      // .pipe(delay(2000))
      .pipe(map(data => data.items.map(item => new YoutubeItem(Object.assign(item.snippet, item.id)))));
  }

}
