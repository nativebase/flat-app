import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from './DrawerContent';
import News from '../news';
import Channel from '../channels';
import OverView from '../overView';

type RootDrawerParamList = {
  News: undefined;
  Channel: undefined;
  OverView: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function DrawerHome() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name='News' component={News} />
      <Drawer.Screen name='Channel' component={Channel} />
      <Drawer.Screen name='OverView' component={OverView} />
    </Drawer.Navigator>
  );
}
