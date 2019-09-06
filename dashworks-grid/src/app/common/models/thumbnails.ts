export interface ThumbnailsItemI {
  url: string;
  width: number;
  height: number;
}

export interface ThumbnailsI {
  default: ThumbnailsItemI;
}

export class Thumbnails implements ThumbnailsI {

  default = {
    url: '',
    width: 0,
    height: 0
  };

  public constructor(init?: Partial<ThumbnailsI>) {
    if (!init) { return; }
    Object.keys(this).forEach((key) => {
      if (key in this && init[key]) {
        this[key] = init[key];
      }
    });
  }

}
