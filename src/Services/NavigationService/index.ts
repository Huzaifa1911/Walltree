import {
  CommonActions,
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

export default {navigationRef, navigate};
