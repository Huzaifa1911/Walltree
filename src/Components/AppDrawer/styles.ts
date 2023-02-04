import {View} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const StyledContainer = styled(View)(({theme}: CustomThemeType) => ({
  backgroundColor: theme?.colors.black,
  flex: 1,
  paddingTop: isIphoneX() ? 35 : 0,
}));

export const StyledWrapper = styled(View)({
  paddingHorizontal: 16,
  marginTop: 100,
  justifyContent: 'space-between',
});

export const StyledContent = styled(View)({flexDirection: 'row' as const});

export const StyledTextWrapper = styled(View)({
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 10,
});

export const Avatar = styled(View)({
  borderRadius: 50,
  height: 80,
  width: 80,
  backgroundColor: 'gray',
});
