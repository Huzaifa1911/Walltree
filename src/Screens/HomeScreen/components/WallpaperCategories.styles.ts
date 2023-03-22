import {TWallpaperCategory} from 'Types';
import {FlatList, View} from 'react-native';
import styled from 'styled-components/native';

export const ItemSeparator = styled(View)({
  width: 16,
});

export const WallpaperList = styled(FlatList<TWallpaperCategory>).attrs(() => ({
  contentContainerStyle: {
    paddingHorizontal: 20,
  },
}))``;
