import React from 'react';
import {
  Text,
  View,
  Box,
  Icon,
  HStack,
  Input,
  Button,
  Image,
  Flex,
} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthStackProps } from '../../interfaces';

export default function Login(props: AuthStackProps) {
  return (
    <Flex flex={1}>
      <Image
        flex={1}
        width={'null'}
        alt={'bg-Image'}
        source={{
          uri:
            'https://image.freepik.com/free-vector/green-forest-background_43633-2235.jpg',
        }}
      />

      <View position='absolute' top={0} width={'100%'} height={'100%'}>
        <View flex={1}>
          <Box flex={0.4}></Box>
          <Box flex={1.2} justifyContent={'center'} alignItems={'center'}>
            <Icon
              type={'FontAwesome'}
              name={'font'}
              color={'white.100'}
              size={20}
            />
            <Text fontSize={20} fontWeight={'bold'} mt={5} color={'white.100'}>
              FLAT APP
            </Text>
          </Box>
          <Box flex={1.2} pl={5} pr={5} pt={5}>
            <Input
              w='100%'
              h={50}
              borderRadius={20}
              bg={'transparent'}
              color={'white.100'}
              InputLeftElement={
                <Box pl={3}>
                  <Icon name='email' fontSize='xl' type='MaterialIcons' />
                </Box>
              }
              placeholder='Email'
              placeholderTextColor='#fff'
              mb={5}
              borderColor={'white.100'}
              fontWeight={'600'}
            />
            <Input
              w='100%'
              h={50}
              borderRadius={20}
              bg={'transparent'}
              color={'white.100'}
              InputLeftElement={
                <Box pl={3}>
                  <Icon name='lock' fontSize='xl' type='MaterialIcons' />
                </Box>
              }
              placeholder='Password'
              placeholderTextColor='#fff'
              mb={5}
              borderColor={'white.100'}
              fontWeight={'600'}
            />
            <Button
              borderRadius={20}
              h={50}
              size='md'
              colorScheme='teal'
              variant={'solid'}
              bg={'green.100'}
              color={'white.100'}
              onPress={() => {
                props.navigation.navigate('OnBoarding');
              }}
            >
              Get Started
            </Button>
            <HStack justifyContent={'space-between'} mt={2}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('CreateAccount');
                }}
              >
                <Text color={'white.100'} fontWeight={'800'}>
                  Create Account
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('ForgotPassword');
                }}
              >
                <Text color={'white.100'} fontWeight={'800'}>
                  Forgot Password
                </Text>
              </TouchableOpacity>
            </HStack>

            <Box
              width={'100%'}
              alignItems={'flex-end'}
              position={'absolute'}
              bottom={10}
            >
              <Button
                size={'sm'}
                variant={'outline'}
                color={'white.100'}
                onPress={() => {
                  props.navigation.navigate('OnBoarding');
                }}
              >
                Skip
              </Button>
            </Box>
          </Box>
        </View>
      </View>
    </Flex>
  );
}
