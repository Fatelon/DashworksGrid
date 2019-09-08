import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Record } from '../../models/record';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  DATA_URL =
    'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDOfT_BO81a' +
    'EZScosfTYMruJobmpjqNeEk&maxResults=50&type=video&part=snippet&q=john';

  constructor(private httpClient: HttpClient) { }

  public getYoutubeItems(): Observable<Record[]> {
    return this.httpClient
      .get<any>(`${this.DATA_URL}`)
      .pipe(map(data => {
        if (!data || !data.items) { return []; }
        return data.items.map(item => {
          if (!item) { return new Record(); }
          return new Record(Object.assign(item.snippet, item.id));
        });
      }));
  }

}
