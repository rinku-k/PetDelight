import React from 'react';
import { View } from 'react-native';

export const Rectangle = ({
  color,
  height,
  width,
  radius = 0,
}: {
  color: string;
  height: number;
  width: number;
  radius: number;
}) => {
  return (
    <View
      style={{
        width,
        height,
        borderRadius: radius,
        backgroundColor: color,
      }}
    />
  );
};
