// INCLUDE USEREF AND USECONTEXT HOOK
import React, { useRef, useContext } from 'react';

// INCLUDE SYTLED COMPONENTS
import styled from 'styled-components';

// INCLUDE CONTEXT FILE
import { GlobalStateContext } from '../../context/Context';

import styles from '../../styles/index.css';

const Categories = () => {
  const { selectedCategory, setSelectedCategory, showCategories } =
    useContext(GlobalStateContext);

  const ref = useRef(null);

  // FUNCTION SETS THE ID OF THE CLICKED CATEGORY AND ASIGNS IT TO THE SELECTED-CATEGORY STATE
  const handleSelected = (e) => {
    setSelectedCategory(e.currentTarget.id);

    // console.log(ref.current.id);
  };

  const Categories = [
    'All',
    'Surveys and Forms',
    'Digital Marketing',
    'Platform News and Updates',
    'Tips and Best Practise',
    'Data Management',
    'Marketing Analytics',
    'Landing Pages',
    'Email Marketing',
    'Marketing Automation',
  ];

  console.log(selectedCategory);

  return (
    <CategoryContainer>
      <CategoryTitle>Categories</CategoryTitle>

      <CategoryItemContainer onClick={showCategories}>
        {Categories.map((category) => (
          <CategoryItem
            key={category.id}
            id={category.toString()}
            onClick={handleSelected}
          >
            {category}
          </CategoryItem>
        ))}{' '}
      </CategoryItemContainer>
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  width: 100%;
  background: #fff;
  height: auto;
  padding: 1rem;
  box-shadow: 3px 1px 10px 1px #88888822;
`;
const CategoryTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  /* @media (max-width: 768px) {
    display: none;
  } */
`;
const CategoryItemContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const CategoryItem = styled.div`
  & {
    display: flex;
    align-items: center;
    text-align: left;
    background: #1c1c1c;
    width: 10rem;
    height: 1rem;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 400;
    padding: 1rem;
    margin: 0.5rem 0;
  }
  &:hover {
    background: #fff;
    color: #1c1c1c;
    border: 2px solid #1c1c1c;
    margin: 0;
  }
`;

export default Categories;
