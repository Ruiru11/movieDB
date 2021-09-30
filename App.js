/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Movies from './src/components/home';
import Details from './src/components/details';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#95a5a6"
      screenOptions={{
        tabBarStyle: {backgroundColor: '#1B1C2A'},
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={Movies}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image
              source={require('./assets/home.png')}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{height: 25, width: 25, tintColor: 'white'}}
            />
          ),

          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
