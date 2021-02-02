import React from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Button } from 'react-native';
import { extendTheme, NativeBaseProvider, View, Text } from 'native-base';

import { newColorTheme } from './utils/colorTheme';
import DrawerContent from './src/DrawerContent';
import Login from './src/Login';
import OnBoarding from './src/OnBoarding';

const theme = extendTheme({ colors: newColorTheme });

type RootDrawerParamList = {
  Home: undefined;
  Notifications: undefined;
  Login: undefined;
  OnBoarding: undefined;
};

type ProfileScreenNavigationProp = DrawerNavigationProp<
  RootDrawerParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title='Go to notifications'
      />
    </View>
  );
}

function NotificationsScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notifications Screen</Text>
      <Button onPress={() => navigation.goBack()} title='Go back home' />
    </View>
  );
}

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name='Home' component={HomeScreen} />
          <Drawer.Screen name='Notifications' component={NotificationsScreen} />
          <Drawer.Screen name='Login' component={Login} />
          <Drawer.Screen name='OnBoarding' component={OnBoarding} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
