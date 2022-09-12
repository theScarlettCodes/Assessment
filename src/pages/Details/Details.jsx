import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import moment from 'moment';
import styled from 'styled-components';

import { GlobalStateContext } from '../../context/Context';

const Details = () => {
  const { posts } = useContext(GlobalStateContext);

  const { postId } = useParams();

  console.log(postId);
  return (
    <PostSection>
      {posts
        ?.filter((post) => post.id === postId)
        .map((postDetail) => (
          <PostContainer key={postDetail?.id}>
            <PostHead>
              <img src={postDetail?.author?.avatar} alt="image" />
              <div className="nameAndDate">
                <PostTitle>{postDetail?.author?.name}</PostTitle>
                <PostDate>
                  {moment(postDetail?.publishDate).format('L')}
                </PostDate>
              </div>
            </PostHead>
            <PostBody>
              <p className="postBody">{postDetail?.title}</p>
              <summary>
                <h3>Summary:</h3>
                <p>{postDetail?.summary}</p>
              </summary>

              <PostTags>
                {postDetail?.categories?.map((category) => (
                  <TagItem key={category.id}> {category.name} </TagItem>
                ))}
              </PostTags>
            </PostBody>{' '}
          </PostContainer>
        ))}

      <LinkButton to={`/`}>Back to Home</LinkButton>
    </PostSection>
  );
};

const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: center;
  background: #24eba3;
  width: auto;
  margin: auto;
  height: 2rem;
  padding: 0.7rem 2rem;
  text-decoration: none;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 500;
`;
const PostSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 1rem 0;
  margin: 4rem auto;
  gap: 2rem;
`;
const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  box-shadow: 3px 1px 10px 1px #88888822;
  margin-bottom: 2rem;
`;
const PostHead = styled.div`
  background: #1c1c1c;
  color: #fff;
  font-weight: 400f;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 2rem;
`;
const PostTitle = styled.h3`
  margin: 0;
  color: #fff;
`;
const PostDate = styled.p`
  margin: 0;
  font-size: 0.7rem;
`;
const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const PostTags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
`;
const TagItem = styled.div`
  background: #dcdcdc;
  padding: 0.6rem 1rem;
`;

export default Details;
