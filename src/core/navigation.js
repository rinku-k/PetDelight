import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ROUTES } from '../constant';

import { useColorScheme } from 'react-native';
import { Adoption } from '../modules/adoption';
import LightTheme, { DarkTheme } from '../modules/constants/themes';
import { Home } from '../modules/home';
import { Carousal } from '../modules/login/carousal';
import { Profile } from '../modules/profile';
import { Splash } from '../modules/splash';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            // backgroundColor: 'rgba(255, 255, 255, 0.5)',
          },
          // headerTransparent: true,
          headerTitleStyle: {
            color: 'white',
          },
        }}>
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
