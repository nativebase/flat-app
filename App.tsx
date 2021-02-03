import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { extendTheme, NativeBaseProvider } from 'native-base';
import { newColorTheme } from './utils/colorTheme';

import Login from './src/screen/authScreen/Login';
import OnBoarding from './src/screen/onBoardingScreen/OnBoarding';
import DrawerHome from './src/screen/drawerScreen/index';
import CreateAccount from './src/screen/authScreen/CreateAccount';
import ForgotPassword from './src/screen/authScreen/ForgotPassword';

const theme = extendTheme({ colors: newColorTheme });

type RootDrawerParamList = {
  Login: undefined;
  OnBoarding: undefined;
  ForgotPassword: undefined;
  CreateAccount: undefined;
  DrawerHome: undefined;
};

const Stack = createStackNavigator<RootDrawerParamList>();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='OnBoarding' component={OnBoarding} />
          <Stack.Screen name='CreateAccount' component={CreateAccount} />
          <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
          <Stack.Screen name='DrawerHome' component={DrawerHome} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
