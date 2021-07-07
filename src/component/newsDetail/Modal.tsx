import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  HStack,
  Icon,
  Divider,
  Center,
  Text,
  Slider,
  SliderFilledTrack,
  SliderTrack,
  SliderThumb,
} from 'native-base';

export default function NewsDetail(props: any) {
  return (
    <Modal isOpen={props.isModal} onClose={props.setIsModal} size={'full'}>
      <ModalOverlay />
      <ModalContent pt={5} pb={3} pr={0} pl={0} bg={'green.100'}>
        <ModalBody>
          <HStack justifyContent={'space-around'} mb={5}>
            <Center bg={'white.100'} h={70} w={70} borderRadius={40}>
              <Icon name='sunny' color={'green.100'} type='Ionicons' size={8} />
            </Center>
            <Center bg={'green.200'} h={70} w={70} borderRadius={40}>
              <Icon name='moon' color={'green.100'} type='Ionicons' size={8} />
            </Center>
          </HStack>
          <Divider borderColor={'white.100'} />
          <HStack justifyContent={'space-around'} mb={8} mt={8}>
            <Text color={'white.100'} fontSize={16}>
              {'CHOOSE TYPESPACE'}
            </Text>
            <Text color={'white.100'} fontSize={16}>
              {'SANS SERIF'}
            </Text>
          </HStack>
          <Divider borderColor={'white.100'} />
          <HStack justifyContent={'space-between'} pt={5} pr={4} pl={4}>
            <Icon
              name='format-letter-case'
              color={'white.100'}
              type='MaterialCommunityIcons'
              size={6}
              fontWeight={'bold'}
            />
            <Icon
              name='format-letter-case'
              color={'white.100'}
              type='MaterialCommunityIcons'
              size={10}
              fontWeight={'bold'}
            />
          </HStack>
          <Slider defaultValue={40} colorScheme='white.100' size='sm'>
            <SliderTrack bg={'green.200'}>
              <SliderFilledTrack bg='white.100' />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
