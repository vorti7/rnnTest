import { Navigation } from 'react-native-navigation';

import * as Const from './const';
import * as Screens from '../screen';

export default function registerScreens() {
  Navigation.registerComponent(Const.SCREEN_INTRO, () =>
    Screens.IntroScreen
  );
  Navigation.registerComponent(Const.SCREEN_MAIN, () =>
    Screens.MainScreen
  );
  Navigation.registerComponent(Const.SCREEN_PUSHED01, () =>
    Screens.PushedScreen01
  );
  Navigation.registerComponent(Const.SCREEN_MODAL01, () =>
    Screens.ModalScreen01
  );
  Navigation.registerComponent(Const.SCREEN_OVERLAY01, () =>
    Screens.OverlayScreen01
  );
}