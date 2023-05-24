import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './Home';
import DetailsPost from './DetailsPost';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ title: 'Bestsellers' }} />
        <Stack.Screen
          name='DetailsPost'
          component={DetailsPost}
          options={{ title: 'About Book' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

// <Stack.Navigator>...</Stack.Navigator> === <Routes>...</Routes>
