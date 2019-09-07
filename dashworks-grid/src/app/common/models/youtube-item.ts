import { v4 as uuid } from 'uuid';
import { Thumbnails } from './thumbnails';

export interface YoutubeItemI {
  id: string;
  thumbnails: Thumbnails;
  publishedAt: string;
  title: string;
  description: string;
  videoId: string;
}

export class YoutubeItem implements YoutubeItemI {
  id = uuid();
  thumbnails = new Thumbnails();
  publishedAt = '';
  title = '';
  description = '';
  videoId = '';

  public constructor(init?: Partial<YoutubeItemI>) {
    if (!init) { return; }
    Object.keys(this).forEach((key) => {
      if (key in this && init[key]) {
        this[key] = init[key];
      }
    });
  }

}
