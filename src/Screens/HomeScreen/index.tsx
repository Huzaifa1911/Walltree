import React from 'react';

import {ScreenWrapper, Spacer} from 'Components';
import WallpaperCategories from './components/WallpaperCategories';

const HomeScreen = () => {
  return (
    <ScreenWrapper type="scroll">
      <Spacer top={25} />
      <WallpaperCategories />
    </ScreenWrapper>
  );
};

export default HomeScreen;
