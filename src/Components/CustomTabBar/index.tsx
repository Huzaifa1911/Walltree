import React, {useState} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {Dimensions} from 'react-native';

import {AnimatedWrapper, ButtonWrapper, StyledContainer} from './styles';
import {TabButton} from 'Components';

const WIDTH = Dimensions.get('screen').width;
const SPACING = 35;

const AppTabBar = (props: BottomTabBarProps) => {
  const {descriptors, insets, navigation, state} = props;
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(state.index);

  const routes = state.routes;
  const tabCount = state.routes.length;
  const buttonWrapperWidth = WIDTH - SPACING;
  const tabWidth = buttonWrapperWidth / tabCount;

  const animationStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(tabWidth * selectedTabIndex, {
          duration: 400,
        }),
      },
    ],
  }));

  return (
    <StyledContainer style={{paddingBottom: insets.bottom}}>
      <ButtonWrapper width={buttonWrapperWidth}>
        <AnimatedWrapper width={tabWidth} style={animationStyles} />
        {routes.map((route, index) => {
          const isFocused = selectedTabIndex === index;
          return (
            <TabButton
              width={tabWidth}
              key={route.key}
              isFocused={isFocused}
              icon={descriptors[route.key].options.tabBarIcon}
              label={descriptors[route.key].options.title || route.name}
              onPress={() => {
                navigation.navigate(route.name);
                setSelectedTabIndex(index);
              }}
            />
          );
        })}
      </ButtonWrapper>
    </StyledContainer>
  );
};

export default AppTabBar;
