import React from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { Box, SimpleGrid, Image, Text } from 'native-base';

import { CHANNELS } from '../../../../dummyData/Channel';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ChannelHome({ navigation }: any) {
  return (
    <ScrollView>
      <SimpleGrid columns={2} spacing={1}>
        {CHANNELS.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('ChannelDetail')}
            >
              <Box
                bg='#d1d1d1'
                height={Dimensions.get('screen').width / 2}
                width={Dimensions.get('screen').width / 2}
              >
                <Image
                  alt={'image'}
                  key={index}
                  bg='#d1d1d1'
                  source={{
                    uri: item.uri,
                  }}
                />
                <Text
                  color={'white.100'}
                  fontSize={16}
                  position={'absolute'}
                  bottom={5}
                  left={3}
                  textTransform={'uppercase'}
                  fontWeight={'600'}
                >
                  {item.name}
                </Text>
              </Box>
            </TouchableOpacity>
          );
        })}
      </SimpleGrid>
    </ScrollView>
  );
}
