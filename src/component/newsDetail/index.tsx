import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Image } from 'native-base';

import Header from '../Header';
import NewsText from './NewsText';
import Caraousel from '../Caraousel';
import CustomModal from './Modal';

export default function NewsDetail(props: any) {
  const [isModal, setIsModal] = useState(false);
  const GoBack = () => {
    props.navigation.goBack();
  };

  const NavigateTo = (page: string) => {
    props.navigation.navigate(page);
  };

  const openModal = () => {
    setIsModal(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        GoBack={GoBack}
        mainHeader={false}
        NavigateTo={() => NavigateTo('Comment')}
        openModal={openModal}
      />
      <ScrollView style={{ flex: 1 }}>
        <CustomModal isModal={isModal} setIsModal={setIsModal} />
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
