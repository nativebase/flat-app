import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Channel from './Channel';
import ChannelDetail from './ChannelDetail';
import NewsDetail from '../../../component/newsDetail';
import Comment from '../../../component/comment';

import { DrawerProps } from '../../../interfaces';

type RootStackParamList = {
  Channel: undefined;
  ChannelDetail: undefined;
  NewsDetail: undefined;
  Comment: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Index(props: DrawerProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Channel'}
      >
        <Stack.Screen name='Channel' component={Channel} />
        <Stack.Screen name='ChannelDetail' component={ChannelDetail} />
        <Stack.Screen name='NewsDetail' component={NewsDetail} />
        <Stack.Screen name='Comment' component={Comment} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
