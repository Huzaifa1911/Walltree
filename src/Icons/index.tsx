import React from 'react';
import {Case, Default, Switch} from 'react-if';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {VectorIconType} from 'Types';

const VectorIcon = (props: VectorIconType) => {
  const {iconType, ...rest} = props;
  return (
    <Switch>
      <Case condition={iconType === 'AntDesign'}>
        <AntDesign {...rest} />
      </Case>
      <Case condition={iconType === 'Feather'}>
        <Feather {...rest} />
      </Case>
      <Case condition={iconType === 'FontAwesome'}>
        <FontAwesome {...rest} />
      </Case>
      <Case condition={iconType === 'SimpleLineIcons'}>
        <SimpleLineIcons {...rest} />
      </Case>
      <Case condition={iconType === 'FontAwesome5'}>
        <FontAwesome5 {...rest} />
      </Case>
      <Case condition={iconType === 'Entypo'}>
        <Entypo {...rest} />
      </Case>
      <Case condition={iconType === 'Foundation'}>
        <Foundation {...rest} />
      </Case>
      <Case condition={iconType === 'Ionicons'}>
        <Ionicons {...rest} />
      </Case>
      <Case condition={iconType === 'MaterialCommunityIcons'}>
        <MaterialCommunityIcons {...rest} />
      </Case>
      <Case condition={iconType === 'MaterialIcons'}>
        <MaterialIcons {...rest} />
      </Case>
      <Case condition={iconType === 'Octicons'}>
        <Octicons {...rest} />
      </Case>
      <Default>
        <></>
      </Default>
    </Switch>
  );
};

export default VectorIcon;
