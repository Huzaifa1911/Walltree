import React from 'react';
import {When} from 'react-if';

import {StyledButton} from '../styles';
import {AppText, Spacer} from 'Components';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

interface ITabButtonProps {
  label: string;
  icon: any;
  isFocused: boolean;
  onPress: () => void;
  width: number;
}

const TabButton = (props: ITabButtonProps) => {
  const {isFocused, icon, label, onPress, width} = props;

  const animationStyle = useAnimatedStyle(() => ({
    transform: [{scale: withTiming(isFocused ? 1 : 0, {duration: 500})}],
  }));

  return (
    <StyledButton width={width} onPress={onPress} activeOpacity={0.7}>
      {icon({focused: isFocused})}

      <When condition={isFocused}>
        <Animated.View style={animationStyle}>
          <Spacer top={5} />
          <AppText
            size={12}
            kind={isFocused ? 'Poppins-SemiBold' : 'Poppins-Regular'}>
            {label}
          </AppText>
        </Animated.View>
      </When>
    </StyledButton>
  );
};

export default TabButton;
