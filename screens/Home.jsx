import { StatusBar } from 'expo-status-bar';
import {
  Text,
  Alert,
  FlatList,
  ActivityIndicator,
  View,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { useState, useEffect } from 'react';
import { Post } from './components/Post.jsx';
import { getTopNews } from './services/newsApi.js';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    return async () => {
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
    };
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      {isLoading && (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ActivityIndicator size='large' />
          <Text style={{ marginTop: 15 }}>Loading...</Text>
        </View>
      )}
      {error && Alert.alert('Error', 'Oops, there is no articles. Please try again')}
      {!error && !isLoading && (
        <FlatList
          // swipe down
          refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchNews()} />}
          data={news}
          renderItem={({ item }, idx) => (
            <TouchableOpacity>
              <Post data={item} key={idx} />
            </TouchableOpacity>
          )}
        />
      )}
      <StatusBar theme='auto' />
    </>
  );
};

export default Home;
