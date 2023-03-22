import {ImageBackground, View} from 'react-native';
import styled from 'styled-components/native';

type TContainerWidth = {width: number | string};
type TStyledCardContainer = {backgroundColor: string} & TContainerWidth;

export const StyledCardContainer = styled(View)(
  ({backgroundColor, width}: TStyledCardContainer) => ({
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    borderRadius: 8,
    backgroundColor,
    width,
    opacity: 0.3,
  }),
);

export const StyledImageBackground = styled(ImageBackground)(
  ({width}: TContainerWidth) => ({
    borderRadius: 8,
    width,
    height: 90,
    overflow: 'hidden',
  }),
);

export const TextWrapper = styled(View)(({width}: TContainerWidth) => ({
  height: 90,
  width,
  position: 'absolute' as const,
  justifyContent: 'center',
  alignItems: 'center',
}));
