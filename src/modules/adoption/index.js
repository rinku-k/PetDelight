import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CARD_CONFIG, CARD_TYPES } from '../../constant';
import { AdCard } from '../components/adCard';
import { DefaultTheme } from '@react-navigation/native';

const cardType = CARD_TYPES.ADOPTION;

export const Adoption = ({ navigation }) => {
  const onPress = () => {
    navigation.goBack();
  };

  let data = [1, 2, 3, 4, 5, 6, 7];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <AdCard
            style={{ marginTop: 10 }}
            color={CARD_CONFIG[cardType].card}
            border={CARD_CONFIG[cardType].border}
            // image={null}
            title="Title title"
            subtitle="subtitle subtitle"
            link="Add"
            // onPress={null}
          />
        )}
        // estimatedItemSize={200}
      />
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={CARD_CONFIG[cardType].backgroundColor}
        style={{
          position: 'absolute',
          alignSelf: 'center',
          bottom: 20,
          height: 72,
          width: 72,
          borderRadius: 72,
        }}>
        <TouchableOpacity
          onPress={undefined}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'white', fontSize: 46, lineHeight: 56 }}>
            +
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DefaultTheme.backgroundColor,
    paddingHorizontal: 20,
  },
});
