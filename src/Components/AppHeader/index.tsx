import React, {useState} from 'react';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {When} from 'react-if';

import {StyledContainer, StyledSearchBarWrapper} from './styles';
import {DashboardIcon, SearchIcon} from 'Icons';
import {AppTheme} from 'Assets';
import {AppSearchBar, IconButton} from 'Components';
import {NavigationService} from 'Services';

const AppHeader = () => {
  const onDashboardPress = () => NavigationService.openDrawer();
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

  const updateActiveStatus = () => setIsSearchActive(!isSearchActive);

  const searchBarStyles = useAnimatedStyle(
    () => ({
      transform: [
        {scaleX: withTiming(isSearchActive ? 1 : 0, {duration: 300})},
      ],
    }),
    [isSearchActive],
  );

  const iconStyle = useAnimatedStyle(
    () => ({
      transform: [{scale: withTiming(isSearchActive ? 0 : 1, {duration: 300})}],
    }),
    [isSearchActive],
  );
  return (
    <StyledContainer>
      <IconButton>
        <DashboardIcon
          onPress={onDashboardPress}
          size={30}
          color={AppTheme.colors.surface}
        />
      </IconButton>

      <StyledSearchBarWrapper style={searchBarStyles}>
        <AppSearchBar onSearch={() => {}} onCloseSearch={updateActiveStatus} />
      </StyledSearchBarWrapper>

      {/* Icon */}
      <When condition={!isSearchActive}>
        <Animated.View style={iconStyle}>
          <IconButton onPress={updateActiveStatus} activeOpacity={0.6}>
            <SearchIcon size={30} color={AppTheme.colors.surface} />
          </IconButton>
        </Animated.View>
      </When>
    </StyledContainer>
  );
};

export default AppHeader;
