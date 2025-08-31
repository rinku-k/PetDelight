import React from 'react';
import { ColorValue, StyleProp, View } from 'react-native';

export const Triangle = ({
  color,
  size,
  style,
}: {
  color: ColorValue;
  size: number;
  style: object;
}) => {
  return (
    <View
      style={{
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: size,
        borderRightWidth: size,
        borderBottomWidth: 2 * size,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: color,
        ...style,
      }}
    />
  );
};
