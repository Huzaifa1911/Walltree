import {Text, ViewStyle, StyleSheet, StyleProp} from 'react-native';
import React, {useMemo} from 'react';
import {Else, If, Then} from 'react-if';

import {ButtonWrapper, Wrapper} from './styles';
import {AppTheme} from 'Assets';
import {TextProps} from 'react-native';

interface IAppTextProps {
  onPress?: () => void;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  textAlign?: 'center' | 'left' | 'right' | 'justify' | 'auto';
  textDecorationLine?: 'underline' | 'none' | 'line-through';
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none';
  color?: string;
  size?: number;
  kind?: (typeof AppTheme.fonts)[keyof typeof AppTheme.fonts];
  textProps?: TextProps;
}

const AppText = (props: IAppTextProps) => {
  const {
    onPress,
    children,
    containerStyle,
    leftIcon,
    rightIcon,
    textProps,
    textTransform = 'none',
    color = AppTheme.colors.surface,
    textAlign = 'left',
    textDecorationLine = 'none',
    kind = 'Poppins-Regular',
    size = 16,
  } = props;
  const disabled = !onPress;

  const appTextStyles = useMemo(
    () =>
      StyleSheet.flatten([
        {
          fontFamily: kind,
          fontSize: size,
          textAlign,
          textTransform,
          textDecorationLine,
          color,
        },
      ]),
    [kind, size, textAlign, textTransform, textDecorationLine, color],
  );

  return (
    <If condition={disabled}>
      <Then>
        <Wrapper style={containerStyle}>
          {leftIcon}
          <Text style={appTextStyles} {...textProps}>
            {children}
          </Text>
          {rightIcon}
        </Wrapper>
      </Then>

      <Else>
        <ButtonWrapper
          style={containerStyle}
          onPress={onPress}
          activeOpacity={0.6}>
          {leftIcon}
          <Text style={appTextStyles} {...textProps}>
            {children}
          </Text>
          {rightIcon}
        </ButtonWrapper>
      </Else>
    </If>
  );
};

export default AppText;
