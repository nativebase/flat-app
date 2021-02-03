import React from 'react';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Text, View } from 'native-base';

import Onboarding from 'react-native-onboarding-swiper';
import { TouchableOpacity, Image } from 'react-native';

type RootDrawerParamList = {
  Login: undefined;
  OnBoarding: undefined;
  ForgotPassword: undefined;
  CreateAccount: undefined;
  DrawerHome: undefined;
};

type ProfileScreenNavigationProp = DrawerNavigationProp<
  RootDrawerParamList,
  'OnBoarding'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Dots = ({ selected }: any) => {
  let backgroundColor;
  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Done</Text>
  </TouchableOpacity>
);

export default function OnBoarding(props: Props) {
  const onDone = async () => {
    try {
      props.navigation.navigate('DrawerHome');
    } catch (e) {
      console.warn(e.message);
    }
  };
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => onDone()}
      onDone={() => onDone()}
      bottomBarHeight={100}
      showPagination={true}
      pages={[
        {
          backgroundColor: '#3DD4AF',
          image: (
            <Image source={require('../../../assets/onboarding-img1.png')} />
          ),
          title: 'Connect to the World',
          subtitle: 'Explore the latest news from your mobile device',
        },
        {
          backgroundColor: '#3DD4AF',
          image: (
            <Image source={require('../../../assets/onboarding-img2.png')} />
          ),
          title: 'Share Your Favorites',
          subtitle: 'Share Your Thoughts With Similar Kind of People',
        },
        {
          backgroundColor: '#3DD4AF',
          image: (
            <Image source={require('../../../assets/onboarding-img3.png')} />
          ),
          title: 'Become The Star',
          subtitle: 'Let The Spot Light Capture You',
        },
      ]}
    />
  );
}
