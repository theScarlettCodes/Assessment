import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import AllCategories from '../AllCategories/AllCategories';
import Categories from '../Categories/Categories';
import NewCategories from '../NewCategories/NewCategories';

import { GlobalStateContext } from '../../context/Context';

const Posts = () => {
  const { selectedCategory } = useContext(GlobalStateContext);

  const [show, setShow] = useState(false);

  const showCategories = () => {
    setShow(!show);
  };

  return (
    <Wrapper>
      <Button onClick={() => showCategories()}>Categories</Button>

      {show && (
        <CategorySection>
          <Categories />
        </CategorySection>
      )}

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

  @media (max-width: 768px) {
    /* display: none; */
  }
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
const Button = styled.button`
  position: sticky;
  top: 0;
  background-color: #5c5aea;
  margin-top: 3rem;
  height: 3rem;
  width: 50%;
  color: #fff;
  font-size: 1.5rem;
  border: 2px solid #5c5aea;
  -webkit-transition: background-color 0.5s, color 0.5s;
  transition: background-color 0.5s, color 0.5s;
  z-index: 10;
`;

export default Posts;
