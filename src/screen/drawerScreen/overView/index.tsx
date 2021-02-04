import React from 'react';
import { View, Text, Button } from 'native-base';

import { DrawerProps } from '../../../interfaces';

export default function OverView(props: DrawerProps) {
  return (
    <View flex={1} alignItems={'center'} justifyContent={'center'}>
      <Text>OverView Screen</Text>
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
