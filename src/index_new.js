import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export const App = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    'This is message 1',
    'Another message here',
    'A short message',
    'Hello from the other side',
    'React Native is awesome',
  ]);

  const [avatarData, setAvatarData] = useState([
    { name: 'User1', score: 100 },
    { name: 'User2', score: 90 },
    { name: 'User1', score: 100 },
    { name: 'User2', score: 8000 },
    { name: 'User1', score: 100 },
    { name: 'User2', score: 90 },
    { name: 'User1', score: 100 },
    { name: 'User2', score: 90 },
    { name: 'User1', score: 1500 },
    { name: 'User2', score: 2600 },
    // Add more avatar data here
  ]);

  const handleSend = () => {
    if (message) {
      // Add the new message to the list
      const newMessages = [...messages, message];
      setMessages(newMessages);

      // Clear the input field
      setMessage('');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.background}>{/* Dark grey background */}</View>
        <View style={styles.bottomSection}>
          <FlatList
            style={styles.avatarContainer}
            data={avatarData}
            numColumns={2} // Display avatars in 2 columns
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.avatarItem}>
                <View style={styles.avatarLeft}>
                  <Text style={styles.avatarName}>{item.name}</Text>
                  <Text style={styles.avatarScore}>{item.score}</Text>
                </View>
                <Image
                  source={require('./assets/avatar.png')}
                  style={styles.avatarImage}
                />
              </View>
            )}
          />
          <View style={styles.conversation}>
            <View onContentSizeChange={() => {}}>
              {messages.map((msg, index) => (
                <Text key={index} style={styles.message}>
                  {msg}
                </Text>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type your message..."
            value={message}
            onChangeText={text => setMessage(text)}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textLeft}>_w_ _____</Text>
          <Text style={styles.superscript}>3 5</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  textLeft: {
    fontSize: 20,
  },
  superscript: {
    fontSize: 14,
  },
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottomSection: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    borderColor: 'grey',
    borderTopWidth: 1,
  },
  avatarContainer: {
    flexDirection: 'column',
    padding: 10,
  },
  conversation: {
    padding: 10,
    width: '50%',
  },
  message: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    margin: 4,
    borderRadius: 8,
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
  },
  sendButton: {
    backgroundColor: 'pink',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  avatarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginRight: 10,
  },
  avatarLeft: {
    marginRight: 5,
  },
  avatarName: {
    fontSize: 14,
  },
  avatarScore: {
    backgroundColor: 'rgba(0, 255, 255, 0.4)',
    color: 'white',
    paddingHorizontal: 5,
    borderRadius: 5,
    fontSize: 12,
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
});

export default App;
