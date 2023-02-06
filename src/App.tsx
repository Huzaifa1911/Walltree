import React, {useEffect} from 'react';
import Navigation from 'Navigation';
import {ThemeProvider} from 'styled-components';

import {AppTheme} from 'Assets';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => SplashScreen.hide(), []);

  return (
    <ThemeProvider theme={AppTheme}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
