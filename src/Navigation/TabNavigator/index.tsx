/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabsConfig} from './config';
import {AppTabBar, TabIcon} from 'Components';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      safeAreaInsets={{bottom: 25}}
      tabBar={props => <AppTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
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
