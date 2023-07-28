import { DefaultTheme } from '@react-navigation/native';

export const colors = {
  ...DefaultTheme,
  primary: '#DBEA8D',
  background: 'transparent',
  secondary: '#FFEEB2',
  surface: 'rgba(255, 255, 255, 0.67)',
  layoutBackground: '#eee',
};

export const textColor = {
  darkest: '#212121',
  dark: '#454548',
  regular: '#757575',
  medium: '#989898',
  light: '#adadad',
  lightest: '#ffffff',
  link: '#77891A',
};

export const LightTheme = {
  colors,
  textColor,
};
