import {IconProps} from 'react-native-vector-icons/Icon';

export type IconType =
  | 'Feather'
  | 'FontAwesome'
  | 'Ionicons'
  | 'Foundation'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Entypo'
  | 'AntDesign'
  | 'Octicons'
  | 'FontAwesome5'
  | 'SimpleLineIcons';

export type VectorIconType = {
  iconType: IconType;
} & IconProps;

export type TabConfig = {
  route: string;
  label: string;
  component: () => JSX.Element;
  icon: {name: string; iconType: IconType};
  activeIcon: {name: string; iconType: IconType};
};

export type TWallpaperCategory = {
  name: string;
  image: string;
  color: string;
  value: string;
};
