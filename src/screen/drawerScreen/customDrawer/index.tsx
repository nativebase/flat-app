import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from './DrawerContent';
import News from '../news';
import Channel from '../channels';
import OverView from '../overView';
import Calender from '../calender';
import TimeLine from '../timeline';
import Profile from '../profile';
import Setting from '../settings';
import Feedback from '../feedback';

type RootDrawerParamList = {
  News: undefined;
  Channel: undefined;
  OverView: undefined;
  Calender: undefined;
  TimeLine: undefined;
  Profile: undefined;
  Setting: undefined;
  Feedback: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function DrawerHome() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name='News' component={News} />
      <Drawer.Screen name='Channel' component={Channel} />
      <Drawer.Screen name='OverView' component={OverView} />
      <Drawer.Screen name='Calender' component={Calender} />
      <Drawer.Screen name='TimeLine' component={TimeLine} />
      <Drawer.Screen name='Profile' component={Profile} />
      <Drawer.Screen name='Setting' component={Setting} />
      <Drawer.Screen name='Feedback' component={Feedback} />
    </Drawer.Navigator>
  );
}
