import React from 'react';
import { FlatList, Text, View } from 'react-native';

let pets = ['🐕', '🐈', '🐦', '🐠', '🐇', '🐁', '🐟', '+'];

export const PetList = () => {
  return (
    <FlatList
      data={pets}
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={({ item }) => (
        <View
          style={{
            width: 72,
            height: 72,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: '#DADADA',
            marginRight: 18,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ textAlign: 'center', color: 'black', fontSize: 36 }}>
            {item}
          </Text>
        </View>
      )}
    />
  );
};
