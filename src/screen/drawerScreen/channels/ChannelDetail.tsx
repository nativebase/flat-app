import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Image } from 'native-base';

import Header from '../../../component/Header';
import List from './List';

export default function ChannelDetail({ navigation }: any) {
  const NavigateTo = (page: string) => {
    navigation.navigate(page);
  };

  const GoBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header GoBack={GoBack} mainHeader={true} showBackArrow={true} />

      <ScrollView style={{ flex: 1 }}>
        <Image
          alt={'news'}
          source={{
            uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKHPsvNDJHY9tWpkHrfkfo8Dkf0LvZU3Hdg&usqp=CAU`,
          }}
          height={330}
          width={'100%'}
        />
        <List NavigateTo={() => NavigateTo('NewsDetail')} />
      </ScrollView>
    </SafeAreaView>
  );
}
