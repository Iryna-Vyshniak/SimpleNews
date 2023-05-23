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
const PostAuthor = styled.Text`
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
`;

export const Post = ({ data: { title, published_date, byline, multimedia } }) => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: multimedia[0].url,
        }}
      />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate> {published_date}</PostDate>
        <PostAuthor>{byline}</PostAuthor>
      </PostDetails>
    </PostView>
  );
};
