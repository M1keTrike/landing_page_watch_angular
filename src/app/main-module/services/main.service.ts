import { Injectable } from '@angular/core';
import { IWatch } from '../models/iwatch';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  mainWatches: IWatch[] = [
    {
      description: 'Watch 1',
      image:
        'https://www.casio.com/content/dam/casio/product-info/locales/mx/es-ar/timepiece/product/watch/G/GW/GW9/gw-9500-1a4/assets/GW-9500-1A4.png.transform/main-visual-sp/image.png',
    },
    {
      description: 'Watch 2',
      image:
        'https://www.casio.com/content/dam/casio/product-info/locales/mx/es-ar/timepiece/product/watch/E/EC/ECB/ecb-40mu-1a/assets/ECB-40MU-1A.png.transform/main-visual-sp/image.png',
    },
    {
      description: 'Watch 3',
      image:
        'https://www.casio.com/content/dam/casio/product-info/locales/mx/es-ar/timepiece/product/watch/A/A1/a12/a120west-1a/assets/A120WEST-1A.png.transform/main-visual-sp/image.png',
    },
    {
      description: 'Watch 4',
      image:
        'https://www.casio.com/content/dam/casio/product-info/locales/mx/es-ar/timepiece/product/watch/A/AE/AE1/ae-1500wh-8b2v/assets/AE-1500WH-8B2V.png.transform/main-visual-sp/image.png',
    },
    {
      description: 'Watch 5',
      image:
        'https://www.casio.com/content/dam/casio/product-info/locales/mx/es-ar/timepiece/product/watch/G/GM/GMW/gmw-b5000ss-2/assets/GMW-B5000SS-2.png.transform/main-visual-sp/image.png',
    },
    {
      description: 'Watch 1',
      image:
        'https://www.casio.com/content/dam/casio/product-info/locales/mx/es-ar/timepiece/product/watch/G/GW/GW9/gw-9500-1a4/assets/GW-9500-1A4.png.transform/main-visual-sp/image.png',
    },
    {
      description: 'Watch 2',
      image:
        'https://www.casio.com/content/dam/casio/product-info/locales/mx/es-ar/timepiece/product/watch/E/EC/ECB/ecb-40mu-1a/assets/ECB-40MU-1A.png.transform/main-visual-sp/image.png',
    },
    {
      description: 'Watch 3',
      image:
        'https://www.casio.com/content/dam/casio/product-info/locales/mx/es-ar/timepiece/product/watch/A/A1/a12/a120west-1a/assets/A120WEST-1A.png.transform/main-visual-sp/image.png',
    },
    {
      description: 'Watch 4',
      image:
        'https://www.casio.com/content/dam/casio/product-info/locales/mx/es-ar/timepiece/product/watch/A/AE/AE1/ae-1500wh-8b2v/assets/AE-1500WH-8B2V.png.transform/main-visual-sp/image.png',
    },
    {
      description: 'Watch 5',
      image:
        'https://www.casio.com/content/dam/casio/product-info/locales/mx/es-ar/timepiece/product/watch/G/GM/GMW/gmw-b5000ss-2/assets/GMW-B5000SS-2.png.transform/main-visual-sp/image.png',
    },
    {
      description: 'Watch 4',
      image:
        'https://www.casio.com/content/dam/casio/product-info/locales/mx/es-ar/timepiece/product/watch/A/AE/AE1/ae-1500wh-8b2v/assets/AE-1500WH-8B2V.png.transform/main-visual-sp/image.png',
    },
    {
      description: 'Watch 5',
      image:
        'https://www.casio.com/content/dam/casio/product-info/locales/mx/es-ar/timepiece/product/watch/G/GM/GMW/gmw-b5000ss-2/assets/GMW-B5000SS-2.png.transform/main-visual-sp/image.png',
    },
  ];

  socialMediaIcons: string[] = [
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-black-icon.png","https://cdn-icons-png.flaticon.com/512/717/717392.png","https://cdn-icons-png.flaticon.com/256/20/20673.png"
  ]

  getMainWatches() {
    return this.mainWatches.slice(0, 2);
  }

  getColectionWatches() {
   
    return this.mainWatches.slice(2);
  }

  getSocialMediaIcons(){
    return this.socialMediaIcons;
  }

  constructor() {}
}
