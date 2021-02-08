import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, HStack, Icon, View } from 'native-base';

interface IProps {
  mainHeader: boolean;
  OpenDrawer?: () => void;
  GoBack?: () => void;
  NavigateTo?: () => void;
  showBackArrow?: boolean;
  commentScreenNavigation?: boolean;
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
          {props.showBackArrow ? (
            <TouchableOpacity onPress={props.GoBack}>
              <Icon
                type='Ionicons'
                name='arrow-back'
                color={'white.100'}
                size={8}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={props.OpenDrawer}>
              <Icon name='menu' color={'white.100'} type='Entypo' size={8} />
            </TouchableOpacity>
          )}

          <Box>
            <Icon
              type={'FontAwesome'}
              name={'font'}
              color={'white.100'}
              size={10}
            />
          </Box>
          <Box>
            <Icon
              type={'FontAwesome'}
              name={'font'}
              color={'green.100'}
              size={10}
            />
          </Box>
        </HStack>
      ) : (
        <HStack
          flex={1}
          bg={'green.100'}
          justifyContent={'space-between'}
          alignItems={'center'}
          pl={5}
          pr={5}
        >
          <TouchableOpacity onPress={props.GoBack}>
            <Icon
              type='Ionicons'
              name='arrow-back'
              color={'white.100'}
              size={8}
            />
          </TouchableOpacity>

          {props.commentScreenNavigation ? (
            <TouchableOpacity onPress={props.NavigateTo}>
              <Icon
                type='Ionicons'
                name='chatbox'
                color={'white.100'}
                size={8}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Icon
                type='Ionicons'
                name='chatbox'
                color={'white.100'}
                size={8}
              />
            </TouchableOpacity>
          )}

          <TouchableOpacity>
            <Icon
              name='format-letter-case'
              color={'white.100'}
              type='MaterialCommunityIcons'
              size={10}
              fontWeight={'bold'}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name='copy' color={'white.100'} type='Ionicons' size={8} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon
              name='md-download-sharp'
              color={'white.100'}
              type='Ionicons'
              size={8}
            />
          </TouchableOpacity>
        </HStack>
      )}
    </View>
  );
}
