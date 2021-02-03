import React from 'react';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { View, Text, Button } from 'native-base';

type RootDrawerParamList = {
  News: undefined;
  Channel: undefined;
  OverView: undefined;
};

type ProfileScreenNavigationProp = DrawerNavigationProp<
  RootDrawerParamList,
  'News'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function Channel(props: Props) {
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
