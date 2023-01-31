import {ScrollView, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

export const ScreenView = styled(View)(({theme}: CustomThemeType) => ({
  backgroundColor: theme?.colors.background,
  flex: 1,
}));

export const ScreenScrollView = styled(ScrollView)(
  ({theme}: CustomThemeType) => ({
    backgroundColor: theme?.colors.background,
  }),
);

export const ScreenKeyboardAwareScrollView = styled(KeyboardAwareScrollView)(
  ({theme}: CustomThemeType) => ({
    backgroundColor: theme?.colors.background,
  }),
);
