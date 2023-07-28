import { useEffect } from 'react';
import { ROUTES } from '../../constant';

export const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(ROUTES.Home);
    }, 2000);
  }, []);

  return null;
  // return (
  //   <AnimatedLottieView
  //     source={require('../../lottie/loading1.json')}
  //     autoPlay
  //     loop
  //   />
  // );
};
