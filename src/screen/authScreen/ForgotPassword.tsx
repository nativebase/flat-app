import React from 'react';
import { Text, Button, Center } from 'native-base';

import { AuthStackProps } from '../../interfaces';

export default function ForgotPassword(props: AuthStackProps) {
  return (
    <Center flex={1}>
      <Text>ForgotPassword Screen</Text>
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
