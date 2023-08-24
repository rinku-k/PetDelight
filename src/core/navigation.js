import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ROUTES } from '../constant';

import { Adoption } from '../modules/adoption/list';
import { Home } from '../modules/home';
import { Carousal } from '../modules/login/carousal';
import { Profile } from '../modules/profile';
import { Splash } from '../modules/splash';
import { PetDetail } from '../modules/adoption/detail';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ROUTES.Splash} component={Splash} />
        <Stack.Screen name={ROUTES.Home} component={Home} />
        <Stack.Screen name={ROUTES.Carousal} component={Carousal} />
        <Stack.Screen name={ROUTES.Adoption} component={Adoption} />
        <Stack.Screen
          name={ROUTES.PetDetail}
          component={PetDetail}
          screenOptions={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen name={ROUTES.Profile} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
