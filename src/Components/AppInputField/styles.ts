import {TextInput, View} from 'react-native';
import styled from 'styled-components/native';

type TInputContainer = {
  height: number | string;
  width: number | string;
} & CustomThemeType;

export const StyledContainer = styled(View)({});

export const InputFieldWrapper = styled(View)(
  ({theme, height, width}: TInputContainer) => ({
    backgroundColor: theme?.colors.surface,
    borderRadius: 8,
    width,
    height,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
);

export const StyledInputField = styled(TextInput)(
  ({theme}: CustomThemeType) => ({
    flex: 1,
    fontSize: 16,
    fontFamily: theme?.fonts.Regular,
    color: theme?.colors.background,
    textAlign: 'left' as const,
  }),
);
