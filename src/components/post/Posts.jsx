import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import AllCategories from '../AllCategories/AllCategories';
import Categories from '../Categories/Categories';
import NewCategories from '../NewCategories/NewCategories';

import { GlobalStateContext } from '../../context/Context';

const Posts = () => {
  const { selectedCategory } = useContext(GlobalStateContext);

  return (
    <Wrapper>
      <CategorySection>
        <Categories />
      </CategorySection>

      <PostSection className="Posts">
        {selectedCategory === 'All' ? <AllCategories /> : <NewCategories />}
      </PostSection>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  gap: 1rem;
  width: 90%;
  margin: 4rem auto;
  flex-direction: column;
`;
const CategorySection = styled.section`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  flex: 20%;
  width: 100%;
  text-align: center;
  z-index: 1;
`;
const PostSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
  /* margin-top: 5rem; */
  z-index: 0;
`;

export default Posts;
