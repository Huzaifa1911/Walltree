import {ViewProps, ScrollViewProps} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Case, Default, Switch} from 'react-if';
import {KeyboardAwareScrollViewProps} from 'react-native-keyboard-aware-scroll-view';

import {
  ScreenKeyboardAwareScrollView,
  ScreenScrollView,
  ScreenView,
} from './styles';

interface IProps {
  type?: 'scroll' | 'none' | 'keyboard';
  viewProps?: ViewProps;
  scrollViewProps?: ScrollViewProps;
  keyboardAwareScrollViewProps?: KeyboardAwareScrollViewProps;
}

const ScreenWrapper = (props: PropsWithChildren<IProps>) => {
  const {
    type = 'none',
    children,
    scrollViewProps,
    viewProps,
    keyboardAwareScrollViewProps,
  } = props;
  return (
    <Switch>
      <Case condition={type === 'scroll'}>
        <ScreenScrollView {...scrollViewProps}>{children}</ScreenScrollView>
      </Case>
      <Case condition={type === 'keyboard'}>
        <ScreenKeyboardAwareScrollView {...keyboardAwareScrollViewProps}>
          {children}
        </ScreenKeyboardAwareScrollView>
      </Case>
      <Default>
        <ScreenView {...viewProps}>{children}</ScreenView>
      </Default>
    </Switch>
  );
};

export default ScreenWrapper;
