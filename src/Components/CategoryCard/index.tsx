import React from 'react';
import {TouchableOpacity} from 'react-native';

import {AppText} from 'Components';
import {
  StyledCardContainer,
  StyledImageBackground,
  TextWrapper,
} from './styles';

interface ICategoryProps {
  name: string;
  imageUri: string;
  backgroundColor: string;
  onPress?: () => void;
  width?: string | number;
}

const CategoryCard = (props: ICategoryProps) => {
  const {backgroundColor, imageUri, name, onPress, width = 'auto'} = props;

  const isCardDisabled = !onPress;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      disabled={isCardDisabled}>
      <StyledImageBackground
        source={{uri: imageUri}}
        width={width}
        resizeMode="cover">
        <StyledCardContainer width={width} backgroundColor={backgroundColor} />
        <TextWrapper width={width}>
          <AppText kind="Poppins-SemiBold" size={16}>
            {name}
          </AppText>
        </TextWrapper>
      </StyledImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;
