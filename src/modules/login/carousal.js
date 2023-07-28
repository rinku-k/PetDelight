import React from 'react';
import { Button, Text, View } from 'react-native';
import { ROUTES } from '../../constant';

export const Carousal = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate(ROUTES.Home);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>This is carousal space</Text>
      </View>
      <View style={{ justifyContent: 'center', width: '60%' }}>
        <Button
          onPress={onPress}
          title="Parents Screen"
          color="#841584"
          accessibilityLabel="Parents Screen button"
        />
      </View>
    </View>
  );
};
