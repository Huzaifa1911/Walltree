import {Text, ViewStyle, StyleSheet, StyleProp} from 'react-native';
import React, {PropsWithChildren, useMemo} from 'react';
import {Else, If, Then} from 'react-if';

import {ButtonWrapper, Wrapper} from './styles';
import {AppTheme} from 'Assets';
import {TextProps} from 'react-native';

export interface IAppTextProps {
  onPress?: () => void;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
  textAlign?: 'center' | 'left' | 'right' | 'justify' | 'auto';
  textDecorationLine?: 'underline' | 'none' | 'line-through';
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none';
  color?: string;
  size?: number;
  kind?: (typeof AppTheme.fonts)[keyof typeof AppTheme.fonts];
  textProps?: TextProps;
  numberOfLines?: number;
}

const AppText = (props: PropsWithChildren<IAppTextProps>) => {
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
    numberOfLines,
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
          <Text
            numberOfLines={numberOfLines}
            style={appTextStyles}
            {...textProps}>
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
          <Text
            numberOfLines={numberOfLines}
            style={appTextStyles}
            {...textProps}>
            {children}
          </Text>
          {rightIcon}
        </ButtonWrapper>
      </Else>
    </If>
  );
};

export default AppText;
