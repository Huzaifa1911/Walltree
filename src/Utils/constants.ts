import {AppTheme} from 'Assets';
import {TWallpaperCategory} from 'Types';

export const NavigateTo = {
  HOME_SCREEN: 'HOME_SCREEN',
  TRENDING_SCREEN: 'TRENDING_SCREEN',
  FAVOURITES_SCREEN: 'FAVOURITES_SCREEN',
  BOTTOM_TABS: 'BOTTOM_TABS',
  CATEGORY_SCREEN: 'CATEGORY_SCREEN',
};

export const WALPAPER_CATEGORIES: TWallpaperCategory[] = [
  {
    name: 'Nature',
    color: AppTheme.colors.green,
    image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg',
    value: 'nature', // this will be send as endpoint param
  },
  {
    name: 'Sunset',
    color: AppTheme.colors.gold,
    image: 'https://images.pexels.com/photos/1454769/pexels-photo-1454769.jpeg',
    value: 'sunset',
  },
  {
    name: 'Mosque',
    color: AppTheme.colors.background,
    image: 'https://images.pexels.com/photos/2406731/pexels-photo-2406731.jpeg',
    value: 'mosque',
  },
  {
    name: 'Abstract',
    color: AppTheme.colors.pink,
    image: 'https://images.pexels.com/photos/2215609/pexels-photo-2215609.jpeg',
    value: 'abstract',
  },

  {
    name: 'Architecture',
    color: AppTheme.colors.gold,
    image: 'https://images.pexels.com/photos/1840806/pexels-photo-1840806.jpeg',
    value: 'architecture',
  },

  {
    name: 'Bikes',
    color: AppTheme.colors.blue,
    image: 'https://images.pexels.com/photos/1715184/pexels-photo-1715184.jpeg',
    value: 'bikes',
  },
];
