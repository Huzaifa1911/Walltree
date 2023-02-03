import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import React from 'react';

const IconButton = (props: TouchableOpacityProps) => {
  const {children, ...rest} = props;
  return <TouchableOpacity {...rest}>{children}</TouchableOpacity>;
};

export default IconButton;
