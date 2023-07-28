import React from 'react';
import { Text, View } from 'react-native';
import { ROUTES } from '../../constant';

export const Profile = ({ navigation }) => {
  // const { navigate } = useNavigation();

  const onPress = () => {
    navigation.navigate(ROUTES.Home, { screen: ROUTES.Parents });
  };

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', backgroundColor: '#FFFFE0' }}>
      <Text>
        {`TODO: 
        1. Total adopted
        2. Total given for adoption 
        3. Settings
        4. Donate
        5. Notification
        6. About Me
        `}
      </Text>
    </View>
  );
};
