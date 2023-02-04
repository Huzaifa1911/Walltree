/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabsConfig} from './config';
import {AppHeader, AppTabBar, TabIcon} from 'Components';
import {isIphoneX} from 'react-native-iphone-x-helper';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      safeAreaInsets={{bottom: isIphoneX() ? 25 : 20}}
      tabBar={props => <AppTabBar {...props} />}
      screenOptions={{header: () => <AppHeader />}}>
      {TabsConfig.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.route}
          component={tab.component}
          options={{
            title: tab.label,
            tabBarIcon: ({focused}) => (
              <TabIcon
                focused={focused}
                icon={tab.icon}
                activeIcon={tab.activeIcon}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;
