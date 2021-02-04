import React from 'react';
import { Text, Button, Center } from 'native-base';

import { AuthStackProps } from '../../interfaces';

export default function CreateAccount(props: AuthStackProps) {
  return (
    <Center flex={1}>
      <Text>CreateAccount Screen</Text>
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
