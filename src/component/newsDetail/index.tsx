import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Image } from 'native-base';

import Header from '../Header';
import NewsText from './NewsText';
import Caraousel from '../Caraousel';

export default function NewsDetail(props: any) {
  const { commentScreenNavigation } = props?.route?.params;

  const GoBack = () => {
    props.navigation.goBack();
  };

  const NavigateTo = (page: string) => {
    props.navigation.navigate(page);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        GoBack={GoBack}
        mainHeader={false}
        NavigateTo={() => NavigateTo('Comment')}
        commentScreenNavigation={commentScreenNavigation}
      />
      <ScrollView style={{ flex: 1 }}>
        <Image
          alt={'news'}
          source={{
            uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxE6GSySbZnhT9hZRy7poMs1Wo0Fn2GbU5g&usqp=CAU`,
          }}
          height={330}
          width={'100%'}
        />
        <NewsText />
        <Caraousel height={250} showDots={true} />
      </ScrollView>
    </SafeAreaView>
  );
}
