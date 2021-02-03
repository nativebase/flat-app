import React, { useEffect, useState } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { View, Text, Image, Button, Box, Center, HStack } from 'native-base';

import { AuthStackProps } from '../../interfaces';
import { ONBOARDING_DATA } from '../../../dummyData/OnBoardingData';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default function OnBoarding(props: AuthStackProps) {
  var scrollRef = React.useRef<ScrollView>();

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        animated: true,
        x: DEVICE_WIDTH * selectedIndex,
        y: 0,
      });
    }
  }, [selectedIndex]);

  const setSelectedIndexFunc = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    setSelectedIndex(selectedIndex);
  };
  return (
    <View height={'100%'} width={'100%'} flex={1}>
      <ScrollView
        horizontal
        pagingEnabled
        onMomentumScrollEnd={setSelectedIndexFunc}
        ref={scrollRef}
        scrollToOverflowEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        {ONBOARDING_DATA.map((item: any, index: any) => (
          <View
            height={'100%'}
            width={Dimensions.get('window').width}
            key={item.id}
            bg={'green.100'}
            pt={20}
          >
            <Center pt={10} pb={10} pl={20} pr={20}>
              <Text
                textAlign={'center'}
                fontSize={22}
                fontWeight={'bold'}
                color={'white.100'}
              >
                {`${index + 1} of ${ONBOARDING_DATA.length}`}
              </Text>
            </Center>
            <Center pt={10} pb={10}>
              <Image
                alt={'img'}
                source={{ uri: item.img }}
                width={200}
                height={200}
                borderRadius={100}
              />
            </Center>

            <Center pt={10} pb={10} pl={20} pr={20}>
              <Text
                textAlign={'center'}
                fontSize={16}
                fontWeight={'bold'}
                color={'white.100'}
              >
                {item.name}
              </Text>
            </Center>
            <Center pt={10} pb={10} pl={20} pr={20}>
              <Button
                size={'md'}
                width={'auto'}
                variant={'rounded'}
                bg={'#728c75'}
                color={'white.100'}
                borderRadius={20}
                onPress={() => props.navigation.navigate('DrawerHome')}
              >
                Continue To App
              </Button>
            </Center>
          </View>
        ))}
      </ScrollView>
      <HStack
        position={'absolute'}
        width={'100%'}
        bottom={25}
        justifyContent={'center'}
        height={10}
        alignItems={'center'}
      >
        {ONBOARDING_DATA.map((item: any, i: number) => (
          <Box
            height={2}
            width={2}
            bg={'white.100'}
            m={1}
            borderRadius={20}
            opacity={i === selectedIndex ? 1 : 0.5}
            key={item.id}
          ></Box>
        ))}
      </HStack>
    </View>
  );
}
