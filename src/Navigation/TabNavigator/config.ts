import {FavouritesScreen, HomeScreen, TrendingScreen} from 'Screens';
import {TabConfig} from 'Types';
import {NavigateTo} from 'Utils';

export const TabsConfig: TabConfig[] = [
  {
    route: NavigateTo.HOME_SCREEN,
    label: 'Home',
    component: HomeScreen,
    activeIcon: {name: 'home', iconType: 'Entypo'},
    icon: {name: 'home', iconType: 'SimpleLineIcons'},
  },
  {
    route: NavigateTo.TRENDING_SCREEN,
    label: 'Trending',
    component: TrendingScreen,
    activeIcon: {name: 'fire', iconType: 'FontAwesome5'},
    icon: {name: 'fire', iconType: 'SimpleLineIcons'},
  },
  {
    route: NavigateTo.FAVOURITES_SCREEN,
    label: 'Favourites',
    component: FavouritesScreen,
    activeIcon: {name: 'heart', iconType: 'AntDesign'},
    icon: {name: 'hearto', iconType: 'AntDesign'},
  },
];
