/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';
import {NavigationService} from 'Services';
import {NavigateTo} from 'Utils';
import {AppDrawer} from 'Components';
import {AppTheme} from 'Assets';
import {CategoryScreen} from 'Screens';

const Drawer = createDrawerNavigator();

const drawerOptions: DrawerNavigationOptions = {
  headerShown: false,
  drawerStyle: {width: '65%'},
  drawerType: 'slide',
  sceneContainerStyle: {backgroundColor: AppTheme.colors.black},
  overlayColor: 'transparent',
};

const Navigation = () => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Drawer.Navigator drawerContent={AppDrawer} screenOptions={drawerOptions}>
        <Drawer.Screen name={NavigateTo.BOTTOM_TABS} component={TabNavigator} />
        <Drawer.Screen
          name={NavigateTo.CATEGORY_SCREEN}
          component={CategoryScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
