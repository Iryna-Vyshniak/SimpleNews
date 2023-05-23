import { StatusBar } from 'expo-status-bar';
import { Text, Alert, ScrollView, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Post } from './components/Post.jsx';
import { getTopNews } from './services/newsApi.js';

const SafeView = styled.SafeAreaView`
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
`;

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);

        const results = await getTopNews();
        console.log(results);
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
      {!error && !isLoading && news.length > 0 && (
        <SafeView>
          <ScrollView>
            {news.map((newsItem, idx) => (
              <Post key={idx} data={newsItem} />
            ))}
          </ScrollView>
        </SafeView>
      )}
      <StatusBar theme='auto' />
    </>
  );
}
