import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  Avatar,
  StyledContainer,
  StyledContent,
  StyledTextWrapper,
  StyledWrapper,
} from './styles';
import {AppText} from 'Components';
import {AppTheme} from 'Assets';

import {DrawerItemConfig} from './config';

const AppDrawer = (props: DrawerContentComponentProps) => {
  const color = AppTheme.colors.surface;
  return (
    <StyledContainer>
      {/* Top Content */}
      <StyledWrapper>
        <StyledContent>
          {/* Avatar */}
          <Avatar />
          {/* User Info */}
          <StyledTextWrapper>
            <AppText size={20}>Huzaifa</AppText>
            <AppText size={10}>Islamabad</AppText>
          </StyledTextWrapper>
        </StyledContent>
      </StyledWrapper>

      {/* Drawer Scroll Content */}
      <DrawerContentScrollView {...props}>
        {DrawerItemConfig.map((drawerItem, index) => (
          <DrawerItem
            key={index}
            label={drawerItem.label}
            onPress={drawerItem.onPress}
            icon={drawerItem.icon}
            labelStyle={{color}}
          />
        ))}
      </DrawerContentScrollView>
    </StyledContainer>
  );
};

export default AppDrawer;
