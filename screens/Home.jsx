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

import { Post } from '../components/Post';
import { getTopNews } from '../services/newsApi.js';

export const Home = ({ navigation }) => {
  //console.log(navigation);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    return async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { results } = await getTopNews();
        setNews(results.lists);
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
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('DetailsPost')}>
              <Post data={item} key={item.list_id} />
            </TouchableOpacity>
          )}
        />
      )}
    </>
  );
};
