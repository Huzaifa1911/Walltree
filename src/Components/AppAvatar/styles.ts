import {Image, View} from 'react-native';
import styled from 'styled-components/native';

type TStyledContainer = {size: number; color?: string} & CustomThemeType;

export const StyledContainer = styled(View)(
  ({size, color, theme}: TStyledContainer) => ({
    borderRadius: size,
    height: size,
    width: size,
    backgroundColor: color || theme?.colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  }),
);

export const StyledImage = styled(Image)(({size}: {size: number}) => ({
  height: size,
  width: size,
  borderRadius: size,
}));
