import React from 'react';
import { Text, Center } from 'native-base';

import { SafeAreaView, ScrollView } from 'react-native';

import Header from '../../../component/Header';

export default function Comments(props: any) {
  const GoBack = () => {
    props.navigation.goBack();
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header GoBack={GoBack} mainHeader={false} />
      <ScrollView style={{ flex: 1 }}>
        <Center>
          <Text fontSize={20}>Comments Screen</Text>
        </Center>
      </ScrollView>
    </SafeAreaView>
  );
}
