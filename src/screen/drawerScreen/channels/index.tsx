import React from 'react';
import { View, Text, Button } from 'native-base';

import { DrawerProps } from '../../../interfaces';

export default function Channel(props: DrawerProps) {
  return (
    <View flex={1} alignItems={'center'} justifyContent={'center'}>
      <Text>Channel Screen q</Text>
      <Button
        size='sm'
        colorScheme='teal'
        variant={'outline'}
        onPress={() => props.navigation.goBack()}
      >
        Go Back
      </Button>
    </View>
  );
}
