import { Thumbnails } from './thumbnails';

export interface YoutubeItemI {
  thumbnails: Thumbnails;
  publishedAt: string;
  title: string;
  description: string;
}

export class YoutubeItem implements YoutubeItemI {
  thumbnails = new Thumbnails();
  publishedAt = '';
  title = '';
  description = '';

  public constructor(init?: Partial<YoutubeItemI>) {
    if (!init) { return; }
    Object.keys(this).forEach((key) => {
      if (key in this && init[key]) {
        this[key] = init[key];
      }
    });
  }

}
