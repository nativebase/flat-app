import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View, Box, Icon, HStack, VStack, Avatar } from 'native-base';

import { DrawerContentScrollView } from '@react-navigation/drawer';

import { CUSTOM_DRAWER } from '../../../../dummyData/CustomDrawerData';
import { DrawerProps } from '../../../interfaces';
// type Props = {
//   children: ReactNode;
// };

export default function DrawerContent(props: DrawerProps) {
  return (
    <View flex={1} pl={5} pr={5} pt={5} bg={'green.100'}>
      <DrawerContentScrollView {...props}>
        <VStack>
          {CUSTOM_DRAWER.map((item) => (
            <Box key={item.id}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate(item.route);
                }}
              >
                <HStack alignItems={'center'} space={3} mb={8}>
                  <Icon
                    type={item.iconType}
                    name={item.iconName}
                    color={'white.100'}
                    size={5}
                  />
                  <Text color={'white.100'} fontSize={16}>
                    {item.name}
                  </Text>
                </HStack>
              </TouchableOpacity>
            </Box>
          ))}
        </VStack>
      </DrawerContentScrollView>
      <Box mb={65} borderTopColor={'white.200'} borderTopWidth={2}>
        <HStack mt={5} alignItems={'center'} justifyContent={'space-between'}>
          <VStack>
            <Text color={'white.100'} fontWeight={'bold'}>
              LOG OUT
            </Text>
            <Text color={'white.100'} fontWeight={'400'}>
              Kumar Sanket
            </Text>
          </VStack>
          <Avatar
            name='Sanket Sahu'
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg',
            }}
          />
        </HStack>
      </Box>
    </View>
  );
}
