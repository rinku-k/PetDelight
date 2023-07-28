import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ROUTES } from '../constant';

import { Adoption } from '../modules/adoption';
import { Home } from '../modules/home';
import { Carousal } from '../modules/login/carousal';
import { Profile } from '../modules/profile';
import { Splash } from '../modules/splash';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.Splash}
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.Home}
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.Carousal}
          component={Carousal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.Adoption}
          component={Adoption}
          options={{ title: 'Adoption' }}
        />
        <Stack.Screen name={ROUTES.Profile} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
