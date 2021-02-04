import React from 'react';
import { View, Text, Button } from 'native-base';
export default function NewsDetail(props: any) {
  return (
    <View flex={1} alignItems={'center'} justifyContent={'center'}>
      <Text>NewsDetail Screen</Text>
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
