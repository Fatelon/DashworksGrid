import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Record } from '../../models/record';
import { Thumbnails } from '../../models/thumbnails';
import { RecordsService } from './records.service';

describe('RecordsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: RecordsService = TestBed.get(RecordsService);
    expect(service).toBeTruthy();
  });

  let httpClientSpy: { get: jasmine.Spy };
  let recordsService: RecordsService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    recordsService = new RecordsService(<any> httpClientSpy);
  });

  it('should call private someDataToRecordArray method when getRecords', () => {
    const realData = {
      data: 'some trash'
    };
    httpClientSpy.get.and.returnValue(of(realData));
    spyOn<any>(recordsService, 'someDataToRecordArray');
    recordsService.getRecords().subscribe();
    expect(recordsService['someDataToRecordArray']).toHaveBeenCalled();
  });

  // Trash data testing
  it('should return [] (HttpClient called once)', () => {
    const realData = {
      data: 'some trash'
    };
    httpClientSpy.get.and.returnValue(of(realData));

    recordsService.getRecords().subscribe(
      (records) => expect(records).toEqual([], 'expected []'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  // The data has trash 'items'
  it('should return Array of Records with two elements', () => {
    const realData = {
      "kind": "youtube#searchListResponse",
      "etag": "",
      "items": ['eee', 123]
    };
    httpClientSpy.get.and.returnValue(of(realData));

    recordsService.getRecords().subscribe(
      records => expect(records.length).toEqual(2, 'expected length is 2'),
      fail
    );
  });

  // Normal data with some trash
  it('should return Array of Records with filtered fields', () => {
    const realData = {
      "kind": "youtube#searchListResponse",
      "items": [
        {
          "id": {
            "kind": "youtube#video",
            "videoId": "3fumBcKC6RE"
          },
          "snippet": {
            "publishedAt": "2011-05-12T20:01:31.000Z",
            "title": "Lil Wayne - John (Explicit) ft. Rick Ross",
            "description": "Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg",
                "width": 120,
                "height": 90
              }
            }
          }
        },
        {
          "id": {
            "videoId": "CfihYWRWRTQ"
          },
          "snippet": {
            "publishedAt": "2013-05-08T20:00:30.000Z",
            "title": "John Newman - Love Me Again",
            "thumbnails": {
              "high": {
                "url": "https://i.ytimg.com/vi/CfihYWRWRTQ/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            }
          }
        }
      ]
    };

    const expectedResult = [
      new Record({
        "videoId": "3fumBcKC6RE",
        "publishedAt": "2011-05-12T20:01:31.000Z",
        "title": "Lil Wayne - John (Explicit) ft. Rick Ross",
        "description": "Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.",
        "thumbnails": new Thumbnails({
          "default": {
            "url": "https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg",
            "width": 120,
            "height": 90
          }
        })
      }),
      new Record({
        "videoId": "CfihYWRWRTQ",
        "publishedAt": "2013-05-08T20:00:30.000Z",
        "title": "John Newman - Love Me Again",
        "thumbnails": new Thumbnails()
      })
    ];

    httpClientSpy.get.and.returnValue(of(realData));

    recordsService.getRecords().subscribe(
      records => {
        if (!records || records.length !== expectedResult.length) { return expect(1).toEqual(0) }
        expectedResult[0].id = records[0].id;
        expectedResult[1].id = records[1].id;
        return expect(records).toEqual(expectedResult, 'expected expectedResult');
      },
      fail
    );
  });
});
