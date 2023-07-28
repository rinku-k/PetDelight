import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Card = ({
  children,
  style,
  onPress = null,
  color,
  border,
  ...props
}) => {
  if (typeof onPress === 'function') {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={[styles.container, style]}
        {...props}>
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={color}
      style={[
        styles.container,
        {
          borderColor: border,
        },
        style,
      ]}
      {...props}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    margin: 1,
    padding: 15,
    borderWidth: 1,
  },
});
