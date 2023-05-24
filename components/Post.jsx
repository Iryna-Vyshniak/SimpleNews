import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  padding: 25px 15px 15px 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 8px;
`;

const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

const PostDate = styled.Text`
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
`;
const PostBrand = styled.Text`
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
`;

export const Post = ({ data }) => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: `https://${data.api_featured_image}`,
        }}
      />
      <PostDetails>
        <PostTitle>{data.name}</PostTitle>
        <PostBrand>{data.brand}</PostBrand>
        <PostDate>{data.created_at.split('T').join(' ').slice(0, -8)}</PostDate>
      </PostDetails>
    </PostView>
  );
};
