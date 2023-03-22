import React from 'react';
import {AppText, CategoryCard, Spacer} from 'Components';
import {NavigateTo, WALPAPER_CATEGORIES} from 'Utils';
import {TWallpaperCategory} from 'Types';
import {ItemSeparator, WallpaperList} from './WallpaperCategories.styles';
import {NavigationService} from 'Services';

const WallpaperCategories = () => {
  const goToCategoryScreen = (category: string) =>
    NavigationService.navigate(NavigateTo.CATEGORY_SCREEN, {category});

  const renderItem = ({item}: {item: TWallpaperCategory}) => (
    <CategoryCard
      backgroundColor={item.color}
      imageUri={item.image}
      name={item.name}
      width={140}
      onPress={() => goToCategoryScreen(item.value)}
    />
  );

  return (
    <>
      <Spacer horizontal={16} bottom={20}>
        <AppText kind="Poppins-SemiBold" size={20}>
          Categories
        </AppText>
      </Spacer>

      <WallpaperList
        data={WALPAPER_CATEGORIES}
        keyExtractor={(item, index) => index.toString() + item.value}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </>
  );
};

export default WallpaperCategories;
