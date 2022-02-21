import React, { useState } from 'react';
import {
  globalStylesheet,
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

import { globalStyles } from '../styles/global';

const Home = () => {
  const [name, setName] = useState('daniel');
  const [person, setPerson] = useState({ name: 'mario' });

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
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <View style={globalStyles.header}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>{name}</Text>
          <Text>{person.name}</Text>
          <TextInput
            style={globalStyles.input}
            placeholder="Write Something"
            onChangeText={(value) => setName(value)}
          />
          <TextInput
            multiline
            keyboardType="numeric"
            style={globalStyles.input}
            placeholder="Write Something"
            onChangeText={(value) => setName(value)}
          />
        </View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={people}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
              <Text style={globalStyles.item}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={globalStyles.buttonContainer}>
          <Button title="Update State" onPress={clickHandler} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
