import React, {useState} from 'react';

import {AppInputField, IconButton} from 'Components';
import {CloseIcon} from 'Icons';
import {AppTheme} from 'Assets';

interface IAppSearchBarProps {
  isSearchActive?: boolean;
  onSearch: (text: string) => void;
  onCloseSearch?: () => void;
}

const AppSearchBar = (props: IAppSearchBarProps) => {
  const {onSearch, onCloseSearch} = props;
  const [search, setSearch] = useState<string>('');

  const onSearchText = (text: string) => {
    setSearch(text);
    onSearch(text);
  };

  return (
    <AppInputField
      placeholder="Search..."
      value={search}
      onChangeText={onSearchText}
      height={40}
      rightAccessory={
        <IconButton onPress={onCloseSearch} activeOpacity={0.6}>
          <CloseIcon size={20} color={AppTheme.colors.background} />
        </IconButton>
      }
    />
  );
};

export default AppSearchBar;
