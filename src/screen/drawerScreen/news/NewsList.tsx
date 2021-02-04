import React from 'react';
import { Text, Box, HStack, Icon } from 'native-base';

import { TouchableOpacity } from 'react-native';
import { ONBOARDING_DATA } from '../../../../dummyData/OnBoardingData';

export default function NewsList(props: any) {
  return (
    <>
      {ONBOARDING_DATA.map((item: any, index: any) => (
        <TouchableOpacity key={index} onPress={props.NavigateTo}>
          <Box
            height={150}
            bg={'white.100'}
            shadow={5}
            boxShadowColor={'red.400'}
            pl={5}
            pr={5}
            pt={5}
            pb={5}
          >
            <Text fontSize={14} fontWeight={'700'} mb={6}>
              Flat App is focused on a minimal use of simple elements,
              typography and flat colors.
            </Text>
            <HStack space={4} mb={3}>
              <Text color={'#8B8B8B'} fontWeight={'600'}>
                CDC
              </Text>
              <HStack space={2}>
                <Icon name='clockcircle' type='AntDesign' size={4} />

                <Text color={'#8B8B8B'} fontWeight={'600'}>
                  1hr ago
                </Text>
              </HStack>
            </HStack>
            <HStack justifyContent={'flex-end'}>
              <TouchableOpacity onPress={() => props.NavigateTo}>
                <Box
                  textAlign={'right'}
                  borderBottomWidth={2}
                  borderBottomColor={'black'}
                  fontWeight={'500'}
                >
                  ENVIRONMENT
                </Box>
              </TouchableOpacity>
            </HStack>
          </Box>
        </TouchableOpacity>
      ))}
    </>
  );
}
