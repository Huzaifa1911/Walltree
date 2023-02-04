import {View} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const StyledContainer = styled(View)(({theme}: CustomThemeType) => ({
  backgroundColor: theme?.colors.background,
  ...ifIphoneX({height: 95, paddingTop: 50}, {height: 70, paddingTop: 30}),
  paddingHorizontal: 16,
  flexDirection: 'row' as const,
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBottom: 10,
}));

export const StyledSearchBarWrapper = styled(Animated.View)({
  flex: 1,
  marginRight: 8,
  marginLeft: 20,
});
