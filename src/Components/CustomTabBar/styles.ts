import {TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

type TScale = {
  width: number;
};

export const StyledContainer = styled(View)(
  ({theme, isDrawerOpen}: {isDrawerOpen: boolean} & CustomThemeType) => ({
    backgroundColor: theme?.colors.black,
    paddingTop: 10,
    marginTop: -20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    elevation: '3',
    shadowColor: 'black',
    shadowOpacity: isDrawerOpen ? '1' : '0.2',
    shadowRadius: 20.0,
  }),
);

export const ButtonWrapper = styled(View)(({width}: TScale) => ({
  flexDirection: 'row' as const,
  justifyContent: 'space-between',
  alignItems: 'center',
  alignSelf: 'center',
  width,
}));

export const StyledButton = styled(TouchableOpacity)(({width}: TScale) => ({
  alignItems: 'center',
  justifyContent: 'center',
  height: 50,
  padding: 12,
  borderRadius: 16,
  zIndex: 1,
  width,
}));

export const AnimatedWrapper = styled(Animated.View)(
  ({theme, width}: TScale & CustomThemeType) => ({
    backgroundColor: theme?.colors.background,
    width,
    borderRadius: 16,
    position: 'absolute' as const,
    top: 0,
    botttom: 0,
    left: 0,
    right: 0,
    height: 50,
  }),
);
