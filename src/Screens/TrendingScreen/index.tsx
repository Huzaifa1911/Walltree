import {Text} from 'react-native';
import React from 'react';

import {ScreenWrapper} from 'Components';
import {AppTheme} from 'Assets';

const TrendingScreen = () => {
  return (
    <ScreenWrapper>
      <Text style={{color: AppTheme.colors.surface}}>Trending Screen</Text>
    </ScreenWrapper>
  );
};

export default TrendingScreen;
