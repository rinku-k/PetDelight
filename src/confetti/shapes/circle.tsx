import React from 'react';
import { View } from 'react-native';

export const Circle = ({
  color,
  size,
  oval = false,
  children,
}: {
  color: string;
  size: number;
  oval: boolean;
  children: React.ReactNode;
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color,
        transform: oval ? [{ scaleX: 2 }] : undefined,
      }}>
      {children}
    </View>
  );
};
