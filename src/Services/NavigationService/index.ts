import {
  CommonActions,
  DrawerActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

const navigate = (route: string, params: any) => {
  try {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(CommonActions.navigate({name: route, params}));
    }
  } catch (error) {}
};

const openDrawer = () => {
  try {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(DrawerActions.openDrawer());
    }
  } catch (error) {}
};

export default {navigationRef, navigate, openDrawer};
