import {ImageProps, ImageSourcePropType} from 'react-native';
import React from 'react';
import {StyledContainer, StyledImage} from './styles';

interface IAvatarImageProps {
  size?: number;
  color?: string;
  source: ImageSourcePropType;
  imageProps?: Omit<ImageProps, 'source'>;
}

const AvatarImage = (props: IAvatarImageProps) => {
  const {imageProps, size = 50, source, color} = props;

  return (
    <StyledContainer size={size} color={color}>
      <StyledImage
        size={size}
        resizeMode="center"
        source={source}
        {...imageProps}
      />
    </StyledContainer>
  );
};

export default AvatarImage;
