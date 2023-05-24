import axios from 'axios';
import { useEffect, useState } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { Text, View, Image, FlatList } from 'react-native';
import styled from 'styled-components/native';
import striptags from 'striptags';

const PostView = styled.View`
  flex-direction: column;
  padding: 25px 15px 15px 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 100%;
  height: 260px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

const PostType = styled.Text`
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 18px;
  line-height: 24px;
`;

const DetailsPost = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const { item } = route.params;
  //console.log(item);

  const options = {
    method: 'GET',
    url: `https://makeup.p.rapidapi.com/products.json?brand=${item}`,
    headers: {
      'X-RapidAPI-Key': '3daf212acdmsh0ee9f773f903ad3p162c34jsnba05117b8383',
      'X-RapidAPI-Host': 'makeup.p.rapidapi.com',
    },
  };

  useEffect(() => {
    (async () => {
      try {
        navigation.setOptions({
          title: item.toString().toUpperCase(),
        });

        setIsLoading(true);
        setError(false);

        const response = await axios.request(options);
        setData(response.data);
      } catch (error) {
        Alert.alert('Error', 'Oops, there is no articles');
      } finally {
        setIsLoading(false);
      }
    })();
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
          data={data}
          keyExtractor={(_, idx) => idx}
          renderItem={({ item }) => (
            <PostView>
              <PostImage
                source={{
                  uri: `https://${item.api_featured_image}`,
                }}
              />
              <PostTitle>{item.name}</PostTitle>
              <PostType> {item.brand}</PostType>
              <PostText>{striptags(item.description)}</PostText>
            </PostView>
          )}
        />
      )}
    </>
  );
};

export default DetailsPost;
