import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CARD_TYPES } from '../../constant';
import { PetList } from '../components/petList';

const { width } = Dimensions.get('window');
const cardType = CARD_TYPES.ADOPTION;

export const Adoption = ({ navigation }) => {
  const onPress = () => {
    navigation.goBack();
  };

  let data = [1, 2, 3, 4, 5, 6, 7];
  return (
    <View style={styles.container}>
      <PetList />
      <Text style={{ color: '#1D1A20', fontSize: 18, fontWeight: '500' }}>
        Charity
      </Text>

      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              width: width * 0.4,
              height: 200,
              backgroundColor: '#fcfcfc',
              borderRadius: 16,
              marginRight: 10,
              elevation: 1,
            }}>
            <View
              style={{
                height: '60%',
              }}>
              <Image
                style={{
                  height: '100%',
                  borderRadius: 16,
                }}
                resizeMode="cover"
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/66b6/e2c0/f0dadb6c1b67d078f61b9dcb20cf7f76?Expires=1691366400&Signature=MtIbdlQ~LqVSxJvm6LWScrHEv8YJN6z-IPV0RIdYvjgMVMvnN1pnNkuy2sPKVfW9fk08w9YxGdhnY8p5UT~Vncpss7UR4oUJyGgJrawqJ3ecfq3SM5IzhiTuOfwgH2HmbSaaE-rIDNB5Mr8ZIopwezMc4ZYsI46HfXX3pbk~Eg6k6cqvfZYilPmCe8ZkdynSsuKLEWa7OcYlfvLtoZRYHO9F9gySw2CNnNUdVkXJ2Psvu6qAjH1FZP5pV2NHrSMSPd2DdpTrU4fJI5wUntozbCAmO1sCIgNwSFx12-MqgR~cyCx4tN5WUB9WERXCRFuOJ-0yNi~7weIS1~YNRPycYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                }}
              />
              <View
                style={{
                  width: 48,
                  height: 48,
                  position: 'absolute',
                  borderRadius: 48,
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  top: 10,
                  right: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="rocket" size={30} color="#FCFCFC" />
              </View>
            </View>
            <View style={{ padding: 15 }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#2B2B2E',
                    fontSize: 16,
                    fontWeight: '600',
                  }}>
                  Gary
                </Text>
                <Text
                  style={{
                    opacity: 0.7,
                    textAlign: 'right',
                    color: '#2B2B2E',
                    fontSize: 13,
                  }}>
                  3 years
                </Text>
              </View>
              <Text
                style={{
                  opacity: 0.7,
                  color: '#2B2B2E',
                  fontSize: 12,
                }}>
                Yorkshire Terrier
              </Text>
            </View>
          </View>
        )}
        // estimatedItemSize={200}
      />
      {/* <LinearGradient
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
      </LinearGradient> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
});
