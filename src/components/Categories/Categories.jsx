import React, { useRef, useContext, useState } from 'react';

import styled from 'styled-components';
import { GlobalStateContext } from '../../context/Context';

import styles from '../../styles/index.css';

const Categories = () => {
  const { selectedCategory, setSelectedCategory } =
    useContext(GlobalStateContext);

  const ref = useRef(null);

  const handleSelected = (e) => {
    setSelectedCategory(e.currentTarget.id);

    // console.log(ref.current.id);
  };

  console.log(selectedCategory);

  return (
    <CategoryContainer>
      <CategoryTitle>Categories</CategoryTitle>

      <CategoryItemContainer>
        {/* Category 1 */}
        <CategoryItem
          ref={ref}
          id="All"
          onClick={(e) => {
            handleSelected(e);
          }}
          // className={ === categorySelected ? styles.selected : null}
        >
          All
        </CategoryItem>

        {/* Category 2 */}
        <CategoryItem
          ref={ref}
          id="Surveys and Forms"
          onClick={(e) => {
            handleSelected(e);
          }}
          // className={
          //    === categorySelected ? styles.selected : null
          // }
        >
          Surveys and Forms
        </CategoryItem>
        {/* Category 1 */}
        <CategoryItem
          ref={ref}
          id="Digital Marketing"
          onClick={(e) => {
            handleSelected(e);
          }}
          // className={
          //    === categorySelected ? styles.selected : null
          // }
        >
          Digital Marketing
        </CategoryItem>

        {/* Category 2 */}
        <CategoryItem
          ref={ref}
          id="Platform News and Updates"
          onClick={(e) => {
            handleSelected(e);
          }}
          // className={
          //    === categorySelected ? styles.selected : null
          // }
        >
          Platform News and Updates
        </CategoryItem>
        {/* Category 1 */}
        <CategoryItem
          ref={ref}
          id="Tips and Best Practise"
          onClick={(e) => {
            handleSelected(e);
          }}
          // className={
          //   ref.current.id === selectedCategory ? styles.selected : null
          // }
        >
          Tips and Best Practise
        </CategoryItem>

        {/* Category 2 */}
        <CategoryItem
          ref={ref}
          id="Data Management"
          onClick={(e) => {
            handleSelected(e);
          }}
          // className={
          //   ref.current.id === selectedCategory ? styles.selected : null
          // }
        >
          Data Management
        </CategoryItem>
        {/* Category 1 */}
        <CategoryItem
          ref={ref}
          id="Marketing Analytics"
          onClick={(e) => {
            handleSelected(e);
          }}
          // className={
          //   ref.current.id === selectedCategory ? styles.selected : null
          // }
        >
          Marketing Analytics
        </CategoryItem>

        {/* Category 2 */}
        <CategoryItem
          ref={ref}
          id="Landing Pages"
          onClick={(e) => {
            handleSelected(e);
          }}
          // className={
          //   ref.current.id === selectedCategory ? styles.selected : null
          // }
        >
          Landing Pages
        </CategoryItem>
        {/* Category 1 */}
        <CategoryItem
          ref={ref}
          id="Ecommerce"
          onClick={(e) => {
            handleSelected(e);
          }}
          // className={
          //   ref.current.id === selectedCategory ? styles.selected : null
          // }
        >
          Ecommerce
        </CategoryItem>

        {/* Category 2 */}
        <CategoryItem
          ref={ref}
          id="Email Marketing"
          onClick={(e) => {
            handleSelected(e);
          }}
          // className={
          //   ref.current.id === selectedCategory ? styles.selected : null
          // }
        >
          Email Marketing
        </CategoryItem>

        {/* Category 2 */}
        <CategoryItem
          ref={ref}
          id="Marketing Automation"
          onClick={(e) => {
            handleSelected(e);
          }}
          // className={
          //   ref.current.id === selectedCategory ? styles.selected : null
          // }
        >
          Marketing Automation
        </CategoryItem>
      </CategoryItemContainer>
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  background: #fff;
  height: auto;
  padding: 1rem;
  box-shadow: 3px 1px 10px 1px #88888822;
`;
const CategoryTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
const CategoryItemContainer = styled.div`
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
