// INCLUDE USECONTEXT AND USESTATE
import React, { useContext, useState } from 'react';

// INCLUDE LINK
import { Link } from 'react-router-dom';

// INCLUDE STYLED-COMPONENTS
import styled from 'styled-components';

// INCLUDE IMPORTS FROM COMPONENTS FOLDER
import AllCategories from '../AllCategories/AllCategories';
import Categories from '../Categories/Categories';
import NewCategories from '../NewCategories/NewCategories';
import Button from '../Button/Button';

// INCLUDE CONTEXTFILE
import { GlobalStateContext } from '../../context/Context';

const Posts = () => {
  // GETTING  STATE FROM CONTEXT FILE
  const { selectedCategory, openCategories, showCategories } =
    useContext(GlobalStateContext);

  // SETTING STATE OF CATEGORIES DISPLAY

  return (
    <Wrapper>
      <ButtonContainer>
        <Button actionHandler={() => showCategories()} value={'Categories'} />
      </ButtonContainer>

      {openCategories && (
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
  margin: 0 auto;
  flex-direction: column;
`;
const CategorySection = styled.section`
  background: #bfc4cc8b;
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: fixed;
  top: 0;
  right: 0;
  font-size: 3rem;
  z-index: 99;

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
const ButtonContainer = styled.div`
  background: #fff;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 90;
`;
// const Button = styled.button`
//   position: sticky;
//   top: 0;
//   background-color: #5c5aea;
//   margin-top: 3rem;
//   height: 3rem;
//   width: 50%;
//   color: #fff;
//   font-size: 1.5rem;
//   border: 2px solid #5c5aea;
//   -webkit-transition: background-color 0.5s, color 0.5s;
//   transition: background-color 0.5s, color 0.5s;
//   z-index: 10;
// `;

export default Posts;
