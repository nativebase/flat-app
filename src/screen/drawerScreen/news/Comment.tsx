import React from 'react';
import { Text, Center, Box } from 'native-base';

import { SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Header from '../../../component/Header';
import CommentDetailScreen from './CommentDetailScreen';
import MyCustomTabBar from '../../../component/CustomTabBar';

const Tab = createMaterialTopTabNavigator();

export default function Comments(props: any) {
  const GoBack = () => {
    props.navigation.goBack();
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header GoBack={GoBack} mainHeader={false} />
      <Center h={12} bg={'green.100'}>
        <Text fontSize={22} color={'white.100'} fontWeight={'bold'}>
          23 COMMENTS
        </Text>
      </Center>
      <Tab.Navigator
        tabBar={(props) => (
          <Box bg={'green.100'} pb={0.6}>
            <MyCustomTabBar {...props} />
          </Box>
        )}
      >
        <Tab.Screen name='Best' component={CommentDetailScreen} />
        <Tab.Screen name='Newest' component={CommentDetailScreen} />
        <Tab.Screen name='Oldest' component={CommentDetailScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
