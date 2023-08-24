import React, { useEffect } from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { buttonStyles } from '../constants/themes/styles/buttons';
import Rive, { LoopMode } from 'rive-react-native';
import Animated from 'react-native-reanimated';

export const PetDetail = ({ route, navigation }) => {
  const { id } = route.params;

  const riveRef = React.useRef(null);
  const onBackPress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    riveRef.current?.reset();
  }, []);

  const handlePlay = () => {
    // riveRef.current?.play();
    riveRef.current?.play('', LoopMode.OneShot);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Animated.Image
          sharedTransitionTag={`adopt-${id}`}
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/66b6/e2c0/f0dadb6c1b67d078f61b9dcb20cf7f76?Expires=1691366400&Signature=MtIbdlQ~LqVSxJvm6LWScrHEv8YJN6z-IPV0RIdYvjgMVMvnN1pnNkuy2sPKVfW9fk08w9YxGdhnY8p5UT~Vncpss7UR4oUJyGgJrawqJ3ecfq3SM5IzhiTuOfwgH2HmbSaaE-rIDNB5Mr8ZIopwezMc4ZYsI46HfXX3pbk~Eg6k6cqvfZYilPmCe8ZkdynSsuKLEWa7OcYlfvLtoZRYHO9F9gySw2CNnNUdVkXJ2Psvu6qAjH1FZP5pV2NHrSMSPd2DdpTrU4fJI5wUntozbCAmO1sCIgNwSFx12-MqgR~cyCx4tN5WUB9WERXCRFuOJ-0yNi~7weIS1~YNRPycYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <View style={styles.overlay}>
            <Text
              style={{
                color: '#2B2B2E',
                fontSize: 16,
                fontWeight: '600',
              }}>
              Name
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: '#2B2B2E',
                  fontSize: 14,
                }}>
                Breed
              </Text>
              <Text
                style={{
                  textAlign: 'right',
                  color: '#2B2B2E',
                  fontSize: 14,
                }}>
                5 Years
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[styles.backButton, buttonStyles.squareCTA]}
        onPress={onBackPress}>
        <Icon name="left" size={24} color="#5F5B5B" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.heartButton, buttonStyles.squareCTA]}
        onPress={handlePlay}>
        <Icon name="hearto" size={24} color="#5F5B5B" />
        {/* <Icon name="heart" size={24} color="#FF4646" /> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 250, // Adjust the height as needed
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 2,
  },
  heartButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 2,
  },
  content: {
    padding: 20,
  },
});

// TODO:
// 1. Diet
// 2. Location
// 3. Owner name
