import {Text} from 'react-native';
import React from 'react';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {StyledContainer} from './styles';

import {DashboardIcon, SearchIcon} from 'Icons';
import {AppTheme} from 'Assets';
import {IconButton} from 'Components';
import {NavigationService} from 'Services';

const AppHeader = () => {
  const onDashboardPress = () => NavigationService.openDrawer();

  return (
    <StyledContainer>
      <IconButton>
        <DashboardIcon
          onPress={onDashboardPress}
          size={30}
          color={AppTheme.colors.surface}
        />
      </IconButton>
      <IconButton>
        <SearchIcon size={30} color={AppTheme.colors.surface} />
      </IconButton>
    </StyledContainer>
  );
};

export default AppHeader;
