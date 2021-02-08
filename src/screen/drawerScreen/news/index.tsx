import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { DrawerProps } from '../../../interfaces';

import NewsList from './NewsList';
import Header from '../../../component/Header';
import Caraousel from '../../../component/Caraousel';
import NewsDetail from '../../../component/newsDetail';
import Comment from '../../../component/comment';

type RootStackParamList = {
  Home: undefined;
  NewsDetail: undefined;
  Comment: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Home = (props: any) => {
  const NavigateTo = (page: string) => {
    props.navigation.navigate(page);
  };

  const OpenDrawer = () => {
    props.navigation.openDrawer();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header OpenDrawer={OpenDrawer} mainHeader={true} />
      <ScrollView style={{ flex: 1 }}>
        <Caraousel
          height={300}
          showText={true}
          showDots={true}
          NavigateTo={() => NavigateTo('NewsDetail')}
        />
        <NewsList NavigateTo={() => NavigateTo('NewsDetail')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default function News(props: DrawerProps) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='NewsDetail' component={NewsDetail} />
      <Stack.Screen name='Comment' component={Comment} />
    </Stack.Navigator>
  );
}
