import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CARD_CONFIG } from '../../../constant';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.4,
    flex: 1,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const HomeCard = ({
  cardType,
  onPress,
}: {
  cardType: any;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={CARD_CONFIG[cardType].backgroundColor}
        style={styles.card}>
        {/* <Image
          // style={{}}
          source={CARD_CONFIG[cardType].image}
        /> */}
        <Text style={{ color: 'white', fontSize: 20 }}>
          {CARD_CONFIG[cardType].text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
