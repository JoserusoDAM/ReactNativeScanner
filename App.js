import React from 'react';
import Home from './src/Home';
import Splash from './src/Splash';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Main = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Main.Navigator initialRouteName="Splash">
        <Main.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false
      }} />
        <Main.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
      }} />
      </Main.Navigator>
    </NavigationContainer>
  );
};


export default App;
