import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Post } from './components/Post.jsx';

export default function App() {
  return (
    <View>
      <Post />
      <StatusBar theme='auto' />
    </View>
  );
}
