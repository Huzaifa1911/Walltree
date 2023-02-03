import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import {NavigationService} from 'Services';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Drawer.Navigator>
        <Drawer.Screen name="Tabs" component={TabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
