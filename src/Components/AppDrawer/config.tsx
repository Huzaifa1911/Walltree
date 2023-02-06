import React from 'react';

import {AppTheme} from 'Assets';
import {
  DocumentIcon,
  LikeIcon,
  PrivacyIcon,
  SettingIcon,
  ShareIcon,
} from 'Icons';

type TDrawerItemConfig = {
  label: string;
  icon: () => React.ReactElement;
  onPress: () => void;
};

export const DrawerItemConfig: TDrawerItemConfig[] = [
  {
    label: 'How to use',
    icon: () => <SettingIcon size={20} color={AppTheme.colors.surface} />,
    onPress: () => {},
  },
  {
    label: 'Send Feedback',
    icon: () => <LikeIcon size={20} color={AppTheme.colors.surface} />,
    onPress: () => {},
  },
  {
    label: 'Share',
    icon: () => <ShareIcon size={20} color={AppTheme.colors.surface} />,
    onPress: () => {},
  },
  {
    label: 'Terms of use',
    icon: () => <DocumentIcon size={20} color={AppTheme.colors.surface} />,
    onPress: () => {},
  },
  {
    label: 'Privacy Policy',
    icon: () => <PrivacyIcon size={20} color={AppTheme.colors.surface} />,
    onPress: () => {},
  },
];
