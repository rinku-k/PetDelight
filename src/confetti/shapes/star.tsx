import React from 'react';
import { View } from 'react-native';
import { Triangle } from './triangle';

export const Star = ({ color, size }: { color: string; size: number }) => {
  return (
    <View
      style={{
        width: size * 3,
        height: size * 3,
      }}>
      <Triangle
        size={size}
        color={color}
        style={{
          position: 'absolute',
          top: 0,
          left: size * 0.74,
        }}
      />
      <View
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          left: 0,
          top: size * 0.9,
          borderStyle: 'solid',
          borderRightWidth: size * 2,
          borderRightColor: 'transparent',
          borderBottomWidth: size * 1.4,
          borderBottomColor: color,
          borderLeftWidth: size * 2,
          borderLeftColor: 'transparent',
          transform: [{ rotate: '35deg' }],
        }}
      />
      <View
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          top: size * 0.9,
          left: -size / 2,
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderRightWidth: size * 2,
          borderRightColor: 'transparent',
          borderBottomWidth: size * 1.4,
          borderBottomColor: color,
          borderLeftWidth: size * 2,
          borderLeftColor: 'transparent',
          transform: [{ rotate: '-35deg' }],
        }}
      />
    </View>
  );
};
