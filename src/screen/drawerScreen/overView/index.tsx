import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box, Text, Center, HStack, Progress, View } from 'native-base';

import { DrawerProps } from '../../../interfaces';

import Header from '../../../component/Header';
import { CHANNELS } from '../../../../dummyData/Channel';

export default function OverView(props: DrawerProps) {
  const OpenDrawer = () => {
    props.navigation.openDrawer();
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header OpenDrawer={OpenDrawer} mainHeader={true} />
      <View flex={1}>
        <Center bg={'green.100'} pt={5} pb={5} mb={3}>
          <Text color={'white.100'} fontSize={22} fontWeight={'400'}>
            OVERVIEW
          </Text>
          <Text color={'white.100'} fontSize={16} fontWeight={'600'}>
            What you are reading the most
          </Text>
        </Center>

        {CHANNELS.map((channel: any, index: number) => (
          <Box pr={4} pl={4} pt={2} pb={1} key={index}>
            <HStack justifyContent={'space-between'} mb={2}>
              <Text textTransform={'uppercase'}>{channel.name}</Text>
              <Text>{channel.progressValue}%</Text>
            </HStack>
            <Progress
              size='xs'
              colorScheme='success'
              bg='green.100'
              mb={4}
              value={channel.progressValue}
            />
          </Box>
        ))}
      </View>
    </SafeAreaView>
  );
}
