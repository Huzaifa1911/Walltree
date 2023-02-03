import {Text} from 'react-native';
import React from 'react';
import {ScreenWrapper} from 'Components';
import {AppTheme} from 'Assets';

const FavouritesScreen = () => {
  return (
    <ScreenWrapper>
      <Text style={{color: AppTheme.colors.surface}}>FavouritesScreen</Text>
    </ScreenWrapper>
  );
};

export default FavouritesScreen;
