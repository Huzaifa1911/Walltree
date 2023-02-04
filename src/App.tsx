import React from 'react';
import Navigation from 'Navigation';
import {ThemeProvider} from 'styled-components';

import {AppTheme} from 'Assets';
import {View} from 'react-native';

const App = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
