import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Image } from 'native-base';

import Header from '../../../component/Header';
import List from './List';

export default function ChannelDetail({ navigation }: any) {
  const NavigateWithParam = (page: string) => {
    navigation.navigate(page, {
      commentScreenNavigation: false,
    });
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
            uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxE6GSySbZnhT9hZRy7poMs1Wo0Fn2GbU5g&usqp=CAU`,
          }}
          height={330}
          width={'100%'}
        />
        <List NavigateTo={() => NavigateWithParam('NewsDetail')} />
      </ScrollView>
    </SafeAreaView>
  );
}
