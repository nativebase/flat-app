import React from 'react';
import { Image, View, Text, HStack, Box, Icon, Divider } from 'native-base';

export default function NewsText() {
  return (
    <View pl={3} pr={5} pt={5} mb={5}>
      <HStack justifyContent={'space-between'} mb={5}>
        <HStack>
          <Text color={'grey.100'} mr={5} fontWeight={'bold'} fontSize={14}>
            CDC
          </Text>
          <Icon
            name='clockcircle'
            type='AntDesign'
            size={4}
            color={'grey.100'}
          />

          <Text ml={1} fontWeight={'bold'} fontSize={14} color={'grey.100'}>
            1day ago
          </Text>
        </HStack>
        <Box
          fontWeight={'bold'}
          fontSize={14}
          borderBottomWidth={2}
          borderBottomColor={'grey.100'}
          color={'grey.100'}
        >
          ENVIRONMENT
        </Box>
      </HStack>
      <Box mb={5} fontSize={14} fontWeight={'500'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illo
        delectus, fuga quibusdam nisi quas debitis deleniti ipsum in blanditiis,
        quos tempora neque voluptatum quaerat! Magni placeat corporis voluptate
        enim.
      </Box>

      <HStack mb={5} space={5}>
        <Divider
          orientation={'vertical'}
          borderColor={'green.100'}
          borderWidth={2}
        />
        <Text color={'green.100'} fontSize={14} fontWeight={'500'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illo
          delectus, fuga quibusdam nisi quas debitis deleniti ipsum in
          blanditiis, quos tempora neque voluptatum quaerat! Magni placeat
          corporis voluptate enim.
        </Text>
      </HStack>

      <Box mb={5} fontSize={14} fontWeight={'500'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illo
        delectus, fuga quibusdam nisi quas debitis deleniti ipsum in blanditiis,
        quos tempora neque voluptatum quaerat! Magni placeat corporis voluptate
        enim.
      </Box>

      <Box mb={5} fontSize={14} fontWeight={'500'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illo
        delectus, fuga quibusdam nisi quas debitis deleniti ipsum in blanditiis,
        quos tempora neque voluptatum quaerat! Magni placeat corporis voluptate
        enim.
      </Box>
    </View>
  );
}
