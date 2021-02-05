import React from 'react';
import { Text, View } from 'native-base';

import { TouchableOpacity } from 'react-native';

export default function MyCustomTabBar({
  state,
  descriptors,
  navigation,
}: any) {
  return (
    <View flexDirection={'row'}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: 'center',
              backgroundColor: '#3DD4AF',
              borderBottomWidth: isFocused ? 5 : 0,
              borderBottomColor: isFocused ? 'white' : 'transparent',
              paddingBottom: 10,
            }}
          >
            <Text color={'white.100'} fontWeight={'bold'} fontSize={18}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
