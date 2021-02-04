import React, { useState } from 'react';
import { Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { View, Text, Box, HStack, Image, VStack, Icon } from 'native-base';

import { ONBOARDING_DATA } from '../../dummyData/OnBoardingData';

export default function Caraousel(props: any) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const setSelectedIndexFunc = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    setSelectedIndex(selectedIndex);
  };
  return (
    <View>
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={setSelectedIndexFunc}
      >
        {ONBOARDING_DATA.map((item: any, index: any) => (
          <TouchableOpacity key={index} onPress={props.NavigateTo}>
            <Image
              source={{ uri: item.img }}
              width={Dimensions.get('screen').width}
              height={props.height}
              alt={'img'}
              key={index}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      {props.showDots && (
        <HStack
          position={'absolute'}
          bottom={2}
          justifyContent={'center'}
          width={'100%'}
        >
          {ONBOARDING_DATA.map((item: any, index: number) => (
            <View
              bg={'white.100'}
              height={2}
              width={2}
              m={2}
              borderRadius={20}
              opacity={index === selectedIndex ? 1 : 0.5}
            ></View>
          ))}
        </HStack>
      )}

      {props.showText && (
        <VStack
          position={'absolute'}
          bottom={10}
          w={'100%'}
          pl={4}
          pr={8}
          space={4}
        >
          <Text color={'white.100'} mr={5} fontWeight={'bold'} fontSize={15}>
            But still look sharp on hign-definition screens
          </Text>
          <HStack justifyContent={'space-between'}>
            <HStack>
              <Text
                color={'white.100'}
                mr={5}
                fontWeight={'bold'}
                fontSize={14}
              >
                SKY.com
              </Text>
              <Icon
                name='clockcircle'
                type='AntDesign'
                size={4}
                color={'white.100'}
              />

              <Text
                color={'white.100'}
                ml={1}
                fontWeight={'bold'}
                fontSize={14}
              >
                1day ago
              </Text>
            </HStack>
            <Box
              color={'white.100'}
              fontWeight={'bold'}
              fontSize={14}
              borderBottomWidth={2}
              borderBottomColor={'white.100'}
            >
              World
            </Box>
          </HStack>
        </VStack>
      )}
    </View>
  );
}
