import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import {
  Text,
  View,
  VStack,
  Box,
  HStack,
  Avatar,
  Icon,
  Input,
} from 'native-base';

import { COMMENT_USER } from '../../../../dummyData/Comments';

export default function CommentDetailScreen() {
  return (
    <View>
      <ScrollView style={{ marginBottom: 60 }}>
        {COMMENT_USER.map((user, idx) => (
          <Box pt={6} pb={4} key={idx} shadow={2} bg={'white.100'}>
            <HStack
              pl={5}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <HStack>
                <Avatar
                  source={{
                    uri: user.uri,
                  }}
                  name={user.name}
                  width={12}
                  height={12}
                />

                <VStack pl={2}>
                  <Text fontWeight={'bold'} fontSize={18}>
                    {user.name}
                  </Text>
                  <HStack alignItems={'center'} pt={2}>
                    <Text fontSize={14} pl={1} fontWeight={'400'} width={280}>
                      {user.lastMessage}
                    </Text>
                  </HStack>
                  <HStack alignItems={'center'} pt={4} space={2}>
                    <Icon
                      type='AntDesign'
                      name='clockcircle'
                      color={'grey.100'}
                      size={4}
                    />

                    <Text fontSize={14}>{user.time}</Text>
                  </HStack>
                </VStack>
              </HStack>

              <HStack alignItems={'center'} pr={3} space={1}>
                <Icon type='Entypo' name='heart' color={'grey.100'} size={6} />
                <Box color={'grey.100'}>{user.unreadMessage}</Box>
              </HStack>
            </HStack>
          </Box>
        ))}
      </ScrollView>
      <Box
        width={'100%'}
        height={60}
        bg={'#DCDADB'}
        position={'absolute'}
        bottom={0}
        shadow={5}
        justifyContent={'center'}
        alignItems={'center'}
        border={'none'}
      >
        <Input
          w='100%'
          variant='unstyled'
          fontSize={20}
          InputLeftElement={
            <Box pl={5}>
              <Icon
                name='paperclip'
                fontSize='xl'
                type='MaterialCommunityIcons'
                size={6}
              />
            </Box>
          }
          InputRightElement={
            <TouchableOpacity>
              <Text color={'green.100'} fontSize={18} fontWeight={'600'} pr={5}>
                Send
              </Text>
            </TouchableOpacity>
          }
          placeholder='Write Something...'
        />
      </Box>
    </View>
  );
}
