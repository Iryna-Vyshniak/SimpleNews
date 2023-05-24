import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './Home';
import DetailsPost from './DetailsPost';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ title: 'Bestsellers' }} />
        <Stack.Screen name='DetailsPost' component={DetailsPost} options={{ title: 'Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

// <Stack.Navigator>...</Stack.Navigator> === <Routes>...</Routes>
