/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {useDrawerStatus} from '@react-navigation/drawer';

import {TabsConfig} from './config';
import {AppHeader, AppTabBar, TabIcon} from 'Components';
import {StyledContainer, scenenContainerStyles} from './styles';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const status = useDrawerStatus();
  const isOpened = status === 'open';
  const bottomInset = isIphoneX() ? 25 : 20;

  const style = useAnimatedStyle(
    () => ({
      transform: [{scale: withTiming(isOpened ? 0.85 : 1)}],
    }),
    [isOpened],
  );

  return (
    <StyledContainer style={style}>
      <Tab.Navigator
        sceneContainerStyle={scenenContainerStyles.container}
        safeAreaInsets={{bottom: bottomInset}}
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
    </StyledContainer>
  );
};

export default TabNavigator;
