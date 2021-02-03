import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  OnBoarding: undefined;
  ForgotPassword: undefined;
  CreateAccount: undefined;
  DrawerHome: undefined;
};

type ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export interface AuthStackProps {
  navigation: ScreenNavigationProp;
}
