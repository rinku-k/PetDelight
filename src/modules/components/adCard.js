import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Card } from './card';

export const AdCard = ({
  color,
  border,
  image,
  title = '',
  subtitle = '',
  disabled = false,
  onPress = null,
  style = {},
  ...props
}) => {
  return (
    <Card style={style} onPress={onPress} color={color} border={border}>
      <View style={[styles.container, disabled ? styles.disabled : {}]}>
        <Image
          style={styles.image}
          source={image || require('../../assets/dummy-ad-image.webp')}
        />
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={[styles.title, { color: 'white' }]}>
            {title}
          </Text>
          <Text numberOfLines={2} style={[styles.subTitle, { color: 'white' }]}>
            {subtitle}
          </Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // disabled: {
  //   opacity: 0.5,
  // },
  image: {
    height: 80,
    width: 80,
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
  },
  subTitle: {
    fontSize: 14,
  },
});
