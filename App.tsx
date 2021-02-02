import React from 'react';
import { SafeAreaView } from 'react-native';
import { extendTheme, NativeBaseProvider, Text, View } from 'native-base';

import { newColorTheme } from './utils/colorTheme';

const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView>
        <Text bg={'blue.50'}>
          Open up App.tsx to start working on your app!
        </Text>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
