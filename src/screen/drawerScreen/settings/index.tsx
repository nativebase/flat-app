import React from 'react';
import { Text, Button, Center } from 'native-base';

import { DrawerProps } from '../../../interfaces';

export default function Index(props: DrawerProps) {
  return (
    <Center flex={1}>
      <Text>Settings Screen</Text>
      <Button
        size='sm'
        colorScheme='teal'
        variant={'outline'}
        onPress={() => props.navigation.goBack()}
      >
        Go Back
      </Button>
    </Center>
  );
}
