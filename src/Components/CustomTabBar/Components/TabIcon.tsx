import React from 'react';

import {VectorIconType} from 'Types';
import VectorIcon from 'Icons';
import {AppTheme} from 'Assets';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

interface IProps {
  focused: boolean;
  icon: VectorIconType;
  activeIcon: VectorIconType;
}

const TabIcon = (props: IProps) => {
  const {activeIcon, focused, icon} = props;

  const iconName = focused ? activeIcon.name : icon.name;
  const iconType = focused ? activeIcon.iconType : icon.iconType;
  const iconSize = focused ? 20 : 18;

  const animationStyle = useAnimatedStyle(() => ({
    transform: [{translateY: withTiming(focused ? 0 : 5)}],
  }));

  return (
    <Animated.View style={animationStyle}>
      <VectorIcon
        iconType={iconType}
        name={iconName}
        color={AppTheme.colors.surface}
        size={iconSize}
      />
    </Animated.View>
  );
};

export default TabIcon;
