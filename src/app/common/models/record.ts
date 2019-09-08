import { v4 as uuid } from 'uuid';
import { Thumbnails } from './thumbnails';

export interface RecordI {
  id: string;
  thumbnails: Thumbnails;
  publishedAt: string;
  title: string;
  description: string;
  videoId: string;
}

export class Record implements RecordI {
  id = uuid();
  thumbnails = new Thumbnails();
  publishedAt = '';
  title = '';
  description = '';
  videoId = '';

  public constructor(init?: Partial<RecordI>) {
    if (!init) { return; }
    Object.keys(this).forEach((key) => {
      if (key in this && init[key]) {
        this[key] = init[key];
        if (key === 'thumbnails') {
          this[key] = new Thumbnails(init[key]);
        }
      }
    });
  }

}
