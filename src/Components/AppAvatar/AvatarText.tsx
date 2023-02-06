import {StyleProp, ViewStyle} from 'react-native';
import React from 'react';

import AppText, {IAppTextProps} from '../AppText';
import {StyledContainer} from './styles';

interface IAvatarTextProps {
  size?: number;
  color?: string;
  label: string;
  labelStyle?: Omit<
    IAppTextProps,
    'leftIcon' | 'rightIcon' | 'onPress' | 'containerStyle'
  >;
  style?: StyleProp<ViewStyle>;
}

const AvatarText = (props: IAvatarTextProps) => {
  const {size = 50, label, labelStyle, color} = props;

  return (
    <StyledContainer size={size} color={color}>
      <AppText kind="Poppins-SemiBold" size={20} {...labelStyle}>
        {label}
      </AppText>
    </StyledContainer>
  );
};

export default AvatarText;
