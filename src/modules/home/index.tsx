import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { CARD_CONFIG, CARD_TYPES } from '../../constant';
import { HomeCard } from './components/homeCard';

Object.values(CARD_TYPES);

export const Home = ({ navigation }) => {
  const onPress = cardType => {
    navigation.navigate(CARD_CONFIG[cardType].screenName);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.values(CARD_TYPES)}
        renderItem={({ item }) => (
          <HomeCard cardType={item} onPress={() => onPress(item)} />
        )}
        keyExtractor={item => item}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
