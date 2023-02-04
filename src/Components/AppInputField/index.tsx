import React from 'react';
import {StyleProp, TextInputProps, ViewStyle} from 'react-native';
import {When} from 'react-if';

import {AppText, Spacer} from 'Components';
import {InputFieldWrapper, StyledContainer, StyledInputField} from './styles';

interface IAppInputFieldProps {
  title?: string;
  height?: string | number;
  width?: string | number;
  placeholder?: string;
  rightAccessory?: React.ReactElement;
  value: string;
  onChangeText: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  textInputProps?: Omit<
    TextInputProps,
    'value' | 'onChangeText' | 'placeholder'
  >;
}

const AppInputField = (props: IAppInputFieldProps) => {
  const {
    title,
    height = 'auto',
    width = 'auto',
    onChangeText,
    value,
    placeholder,
    rightAccessory,
    containerStyle,
    textInputProps,
  } = props;
  return (
    <StyledContainer style={{height}}>
      <When condition={title}>
        <AppText>{title}</AppText>
        <Spacer bottom={10} />
      </When>

      <InputFieldWrapper height={height} width={width} style={containerStyle}>
        <StyledInputField
          {...textInputProps}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
        />
        <When condition={rightAccessory !== undefined}>{rightAccessory}</When>
      </InputFieldWrapper>
    </StyledContainer>
  );
};

export default AppInputField;
