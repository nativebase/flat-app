import React from 'react';

import { Text, Button, View } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';

type RootDrawerParamList = {
  Login: undefined;
  OnBoarding: undefined;
  ForgotPassword: undefined;
  CreateAccount: undefined;
  DrawerHome: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootDrawerParamList,
  'CreateAccount'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};
export default function CreateAccount(props: Props) {
  return (
    <View flex={1} alignItems={'center'} justifyContent={'center'}>
      <Text>CreateAccount Screen</Text>
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
