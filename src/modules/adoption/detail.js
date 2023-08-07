import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { buttonStyles } from '../constants/themes/styles/buttons';

export const PetDetail = ({ navigation }) => {
  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: '45%', flex: 1 }}>
        {/* <Image
          style={{
            height: '100%',
            width: '90%',
            alignSelf: 'center',
            borderRadius: 29,
            margin: 15,
          }}
          resizeMode="cover"
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/66b6/e2c0/f0dadb6c1b67d078f61b9dcb20cf7f76?Expires=1691366400&Signature=MtIbdlQ~LqVSxJvm6LWScrHEv8YJN6z-IPV0RIdYvjgMVMvnN1pnNkuy2sPKVfW9fk08w9YxGdhnY8p5UT~Vncpss7UR4oUJyGgJrawqJ3ecfq3SM5IzhiTuOfwgH2HmbSaaE-rIDNB5Mr8ZIopwezMc4ZYsI46HfXX3pbk~Eg6k6cqvfZYilPmCe8ZkdynSsuKLEWa7OcYlfvLtoZRYHO9F9gySw2CNnNUdVkXJ2Psvu6qAjH1FZP5pV2NHrSMSPd2DdpTrU4fJI5wUntozbCAmO1sCIgNwSFx12-MqgR~cyCx4tN5WUB9WERXCRFuOJ-0yNi~7weIS1~YNRPycYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          }}
        /> */}
        <ImageBackground
          style={{
            flex: 1,
            justifyContent: 'space-between',
            margin: 20,
          }}
          imageStyle={{
            height: '100%',
            width: '100%',
            alignSelf: 'center',
            borderRadius: 29,
          }}
          resizeMode="cover"
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/66b6/e2c0/f0dadb6c1b67d078f61b9dcb20cf7f76?Expires=1691366400&Signature=MtIbdlQ~LqVSxJvm6LWScrHEv8YJN6z-IPV0RIdYvjgMVMvnN1pnNkuy2sPKVfW9fk08w9YxGdhnY8p5UT~Vncpss7UR4oUJyGgJrawqJ3ecfq3SM5IzhiTuOfwgH2HmbSaaE-rIDNB5Mr8ZIopwezMc4ZYsI46HfXX3pbk~Eg6k6cqvfZYilPmCe8ZkdynSsuKLEWa7OcYlfvLtoZRYHO9F9gySw2CNnNUdVkXJ2Psvu6qAjH1FZP5pV2NHrSMSPd2DdpTrU4fJI5wUntozbCAmO1sCIgNwSFx12-MqgR~cyCx4tN5WUB9WERXCRFuOJ-0yNi~7weIS1~YNRPycYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          }}>
          <View
            style={{
              flexDirection: 'row',
              padding: 20,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={onBackPress}
              style={buttonStyles.squareCTA}>
              <Icon name="left" size={24} color="#5F5B5B" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={undefined}
              style={buttonStyles.squareCTA}>
              <Icon name="hearto" size={24} color="#5F5B5B" />
              {/* <Icon name="heart" size={24} color="#FF4646" /> */}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 20,
              justifyContent: 'space-between',
            }}>
            <View style={styles.container}>
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
        </ImageBackground>
      </View>
      <View style={{ flex: 1, padding: 15 }}>
        <Text>About Itachi</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'rgba(255,255,255, 0.8)',
    borderRadius: 15,
  },
});

// TODO:
// 1. Diet
// 2. Location
// 3. Owner name
