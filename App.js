import { StatusBar } from 'expo-status-bar';
import { Text, Alert, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { Post } from './components/Post.jsx';
import { getTopNews } from './services/newsApi.js';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { results } = await getTopNews();
        setNews(results);
      } catch (error) {
        Alert.alert('Error', 'Oops, there is no articles');
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {isLoading && <Text>Loading...</Text>}
      {error && Alert.alert('Error', 'Oops, there is no articles. Please try again')}
      {!error && !isLoading && (
        <FlatList data={news} renderItem={({ item }, idx) => <Post data={item} key={idx} />} />
      )}
      <StatusBar theme='auto' />
    </>
  );
}
