import React from 'react';
import { Circle } from './shapes/circle';
import { Rectangle } from './shapes/rectangle';
import { View } from 'react-native';
import { Triangle } from './shapes/triangle';
import { Star } from './shapes/star';

export const Main = () => {
  return (
    <View
      style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1 }}>
      <Circle size={20} color="blue" />
      <Circle size={20} color="red" oval />
      <Rectangle width={10} height={20} color="green" />
      <Rectangle width={10} height={30} color="pink" radius={5} />
      <Triangle size={20} color="black" />
      <Star size={10} color="magenta" />
    </View>
  );
};

export default Main;
