import React from 'react';
import { Box } from 'native-base';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ChannelHome from './ChannelHome';
import MyCustomTabBar from '../../../component/CustomTabBar';
import Header from '../../../component/Header';

const Tab = createMaterialTopTabNavigator();

export default function Channel({ navigation }: any) {
  const OpenDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <>
      <Header OpenDrawer={OpenDrawer} mainHeader={true} />
      <Tab.Navigator
        tabBar={(props) => (
          <Box bg={'green.100'} pb={0.6}>
            <MyCustomTabBar {...props} />
          </Box>
        )}
      >
        <Tab.Screen name='Following' component={ChannelHome} />
        <Tab.Screen name='Popular' component={ChannelHome} />
        <Tab.Screen name='Explore' component={ChannelHome} />
      </Tab.Navigator>
    </>
  );
}
