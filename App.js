import { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home';
import About from './pages/about';

/// Load Font On Mount
const getFonts = () => {
  return Font.loadAsync({
    primary: require('./assets/fonts/Shizuru-Regular.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const Stack = createNativeStackNavigator();

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* The Top most is the default screen as it's at the very top of the stack */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
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
