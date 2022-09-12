// INCLUDE USECONTEXT
import React, { useContext } from 'react';

// INCLUDE MOMENT
import moment from 'moment';

// INCLUDE LINK
import { Link } from 'react-router-dom';

// INCLUDE STYLED-COMPONENTS
import styled from 'styled-components';

// INCLUDE BUTTON
import Button from '../Button/Button';

// INCLUDE CONTEXT FILE
import { GlobalStateContext } from '../../context/Context';

const NewCategories = () => {
  // GETTING STATE VARIABLES FROM CONTEXT FILE
  const { isSelected, posts, pagination, setPagination } =
    useContext(GlobalStateContext);

  // PAGINATION LOGIC FUNCTION CHECK IF POST LENGTH GREATER THAN POSTS DISPLAYED ON LOAD
  const loadMore = () => {
    if (pagination < posts.length) {
      setPagination(pagination + 10);
    }
  };
  return (
    <PostSection className="Posts">
      {posts
        ?.filter((post) => isSelected(post))
        .slice(0, pagination)
        .map((post) => {
          return (
            <PostContainer key={post.id}>
              <PostHead>
                <img src={post?.author?.avatar} alt="image" />
                <NameDateContainer>
                  <PostTitle>{post?.author?.name} </PostTitle>
                  <PostDate>{moment(post?.publishDate).format('L')}</PostDate>
                </NameDateContainer>
              </PostHead>
              <PostBody>
                <p className="postBody">{post?.title}</p>
                <summary>
                  <h3>Summary:</h3>
                  <p>{post?.summary}</p>
                </summary>

                <PostTags>
                  {post?.categories?.map((category) => (
                    <TagItem key={category.id}> {category.name} </TagItem>
                  ))}
                </PostTags>

                <LinkButton to={`/posts/${post.id}`}>
                  <Button value={'Read More'} />
                </LinkButton>
              </PostBody>{' '}
            </PostContainer>
          );
        })}

      {pagination < posts.filter((post) => isSelected(post)).length && (
        <ButtonContainer>
          <Button actionHandler={() => loadMore()} value={'Load More'} />
        </ButtonContainer>
      )}
    </PostSection>
  );
};

const LinkButton = styled(Link)`
  width: 15rem;
  text-decoration: none;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 500;
`;
const PostSection = styled.section`
  display: flex;
  flex-direction: column;
  flex: 80%;
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
const NameDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
const PostTags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TagItem = styled.div`
  background: #dcdcdc;
  padding: 0.6rem 1rem;
`;

export default NewCategories;
