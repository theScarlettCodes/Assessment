import React from 'react';

import styled from 'styled-components';

const Details = () => {
  return (
    <PostSection>
      <PostContainer>
        <PostHead>
          <img src="" alt="image" />
          <div className="nameAndDate">
            <PostTitle>Bunnie Mathey </PostTitle>
            <PostDate>Date: 09/28/2020</PostDate>
          </div>
        </PostHead>
        <PostBody>
          <p className="postBody">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur, consequatur!
          </p>
          <summary>
            <h3>Summary:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quas
              eum nobis consequatur at nihil! Accusamus vero ipsam commodi
              porro.
            </p>
          </summary>
          <PostTags>
            {/* {post?.categories?.map((category) => (
              <TagItem key={category.id}> {category.name} </TagItem>
            ))} */}
          </PostTags>
        </PostBody>{' '}
      </PostContainer>
    </PostSection>
  );
};

const PostSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 4rem auto;
  gap: 2rem;
`;
const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  box-shadow: 3px 1px 10px 1px #88888822;
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
  flex-direction: row;
  padding: 2rem 0;
`;

export default Details;
