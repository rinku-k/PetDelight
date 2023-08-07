import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { PetList } from '../components/petList';
import { buttonStyles } from '../constants/themes/styles/buttons';
import { ROUTES } from '../../constant';

const { width } = Dimensions.get('window');

const helpUs = ['Help the Dog', 'Help the cows', 'Help the birds'];
const adoptUs = [
  { name: 'Gary', breed: 'Yorkshire Terrier', age: '3y' },
  { name: 'Itachi', breed: 'French Bulldog', age: '1y 4m' },
  { name: 'Samantha', breed: 'Persian Cat', age: '2y' },
];

const AdoptionCard = ({
  showStar = false,
  name,
  breed,
  age,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: width * 0.4,
        height: title ? 180 : 200,
        backgroundColor: '#fcfcfc',
        borderRadius: 16,
        marginRight: 10,
        elevation: 1,
      }}>
      <View>
        <Image
          style={{
            height: 120,
            borderRadius: 16,
          }}
          resizeMode="cover"
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/66b6/e2c0/f0dadb6c1b67d078f61b9dcb20cf7f76?Expires=1691366400&Signature=MtIbdlQ~LqVSxJvm6LWScrHEv8YJN6z-IPV0RIdYvjgMVMvnN1pnNkuy2sPKVfW9fk08w9YxGdhnY8p5UT~Vncpss7UR4oUJyGgJrawqJ3ecfq3SM5IzhiTuOfwgH2HmbSaaE-rIDNB5Mr8ZIopwezMc4ZYsI46HfXX3pbk~Eg6k6cqvfZYilPmCe8ZkdynSsuKLEWa7OcYlfvLtoZRYHO9F9gySw2CNnNUdVkXJ2Psvu6qAjH1FZP5pV2NHrSMSPd2DdpTrU4fJI5wUntozbCAmO1sCIgNwSFx12-MqgR~cyCx4tN5WUB9WERXCRFuOJ-0yNi~7weIS1~YNRPycYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          }}
        />
        {showStar && (
          <View
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              ...buttonStyles.squareCTA_small,
            }}>
            <Icon name="hearto" size={24} color="#5F5B5B" />
            {/* <Icon name="heart" size={24} color="#FF4646" /> */}
          </View>
        )}
      </View>
      {title ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
          }}>
          <Text
            style={{
              color: '#2B2B2E',
              fontSize: 16,
              fontWeight: '600',
            }}>
            {title}
          </Text>
        </View>
      ) : (
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
              {name}
            </Text>
            <Text
              style={{
                opacity: 0.7,
                textAlign: 'right',
                color: '#2B2B2E',
                fontSize: 13,
              }}>
              {age}
            </Text>
          </View>
          <Text
            style={{
              opacity: 0.7,
              color: '#2B2B2E',
              fontSize: 12,
            }}>
            {breed}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export const Adoption = ({ navigation }) => {
  const onBackPress = () => {
    navigation.goBack();
  };

  const onCardPress = () => {
    navigation.navigate(ROUTES.PetDetail);
  };

  return (
    <View style={styles.container}>
      <PetList />
      <Text style={styles.headText}>Charity</Text>
      <FlatList
        data={helpUs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <AdoptionCard title={item} onPress={onCardPress} />
        )}
        // estimatedItemSize={200}
      />
      <Text style={styles.headText}>Adopt Me</Text>
      <FlatList
        data={adoptUs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <AdoptionCard
            showStar
            name={item.name}
            breed={item.breed}
            age={item.age}
            onPress={onCardPress}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  headText: {
    color: '#1D1A20',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 20,
  },
});
