import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, HStack, Icon, View } from 'native-base';

interface IProps {
  mainHeader: boolean;
  OpenDrawer: () => void;
  GoBack?: () => void;
}

export default function Header(props: IProps) {
  return (
    <View flex={0.1}>
      {props.mainHeader ? (
        <HStack
          flex={1}
          bg={'green.100'}
          justifyContent={'space-between'}
          alignItems={'center'}
          pl={5}
          pr={5}
        >
          <TouchableOpacity onPress={props.OpenDrawer}>
            <Icon name='menu' color={'white.100'} type='Entypo' size={8} />
          </TouchableOpacity>

          <Box>
            <Icon
              type={'FontAwesome'}
              name={'font'}
              color={'white.100'}
              size={10}
            />
          </Box>
          <Box></Box>
        </HStack>
      ) : null}
    </View>
  );
}
