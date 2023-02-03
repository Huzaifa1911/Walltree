import {View} from 'react-native';
import styled from 'styled-components/native';

type TContainer = {} & CustomThemeType;

export const StyledContainer = styled(View)(({theme}: TContainer) => ({
  backgroundColor: theme?.colors.background,
  height: 95,
  paddingHorizontal: 16,
  flexDirection: 'row' as const,
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  paddingBottom: 10,
}));
