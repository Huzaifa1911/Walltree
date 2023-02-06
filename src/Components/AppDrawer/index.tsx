import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  StyledContainer,
  Row,
  StyledProductLogo,
  StyledTextWrapper,
  StyledWrapper,
} from './styles';
import {AppAvatar, AppText} from 'Components';

import {DrawerItemConfig} from './config';
import {AppTheme} from 'Assets';
import {getNameLiterals} from 'Utils';

const NAME = 'Huzaifa Arshad';
const Location = 'Islamabad';

const AppDrawer = (props: DrawerContentComponentProps) => {
  const color = AppTheme.colors.surface;
  return (
    <StyledContainer>
      <StyledProductLogo />

      <StyledWrapper>
        <Row>
          {/* Avatar */}
          <AppAvatar.Text
            label={getNameLiterals(NAME)}
            size={70}
            labelStyle={{size: 30, kind: 'Poppins-SemiBold'}}
          />

          {/* User Info */}
          <StyledTextWrapper>
            <AppText size={20} numberOfLines={2}>
              {NAME}
            </AppText>
            <AppText size={10} numberOfLines={2}>
              {Location}
            </AppText>
          </StyledTextWrapper>
        </Row>
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
