import { DrawerNavigationProp } from '@react-navigation/drawer';

type RootDrawerParamList = {
  News: undefined;
  Channel: undefined;
  OverView: undefined;
};

type ScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'News'>;

export interface DrawerProps {
  navigation: ScreenNavigationProp;
}
