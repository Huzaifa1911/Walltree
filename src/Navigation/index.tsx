import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';
import {NavigationService} from 'Services';
import {NavigateTo} from 'Utils';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Drawer.Navigator
        screenOptions={{headerShown: false, drawerType: 'slide'}}>
        <Drawer.Screen name={NavigateTo.BOTTOM_TABS} component={TabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
