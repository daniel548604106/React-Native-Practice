import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Alert,
} from 'react-native';

/// Load Font On Mount
const getFonts = () => {
  return Font.loadAsync({
    primary: require('./assets/fonts/Shizuru-Regular.ttf'),
  });
};

export default function App() {
  const [name, setName] = useState('daniel');
  const [person, setPerson] = useState({ name: 'mario' });
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [people, setPeople] = useState([
    { name: 'shoisdf', id: '1' },
    { name: 'qweqwe', id: '2' },
    { name: 'shoiasdasdasdf', id: '3' },
    { name: 'shoisasdasddf', id: '4' },
    { name: 'shoisdassdadf', id: '5' },
    { name: 'shoisdassdasdfsdfdf', id: '6' },
    { name: 'shoisdasssdfsddadf', id: '7' },
    { name: 'shoisdassdafsdfsdf', id: '8' },
    { name: 'shoisdassddfadf', id: '9' },
    { name: 'shoisdassdadf', id: '10' },
  ]);

  const clickHandler = () => {
    setName('new Name');
    Alert.alert('OOPS!', 'TODOS must be 3 ', [
      { text: 'Understood', onPress: () => console.log('alert started') },
    ]);
  };

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
  };

  useEffect(() => {
    getFonts();
  }, []);

  if (fontsLoaded) {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>{name}</Text>
            <Text>{person.name}</Text>
            <TextInput
              style={styles.input}
              placeholder="Write Something"
              onChangeText={(value) => setName(value)}
            />
            <TextInput
              multiline
              keyboardType="numeric"
              style={styles.input}
              placeholder="Write Something"
              onChangeText={(value) => setName(value)}
            />
          </View>
          <FlatList
            keyExtractor={(item) => item.id}
            data={people}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => pressHandler(item.id)}>
                <Text style={styles.item}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
          {/* <ScrollView>
          {people.map(({ name, key }) => (
            <Text style={styles.item} key={key}>
              {name}
            </Text>
          ))}
        </ScrollView> */}
          <View style={styles.buttonContainer}>
            <Button title="Update State" onPress={clickHandler} />
          </View>
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onError={console.warn}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  item: {
    marginTop: 24,
    fontFamily: 'primary',
    backgroundColor: 'yellow',
    fontSize: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  buttonContainer: {
    backgroundColor: 'red',
    color: 'white',
  },
});
