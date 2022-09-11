import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [pagination, setPagination] = useState(10);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // GET ALL POSTS
  useEffect(() => {
    const getAllPosts = async () => {
      await axios.get(`/api/posts`).then((response) => {
        setPosts(response.data.posts);
      });
    };
    getAllPosts();
  }, []);

  // GET ALL CATEGORIES
  useEffect(() => {
    const getAllCategories = async () => {
      await axios.get(`/api/posts`).then((response) => {
        const datas = response.data.posts;
        let categoriesList = ['All'];
        datas.forEach((category) => {
          category.categories.forEach((category) => {
            if (!categoriesList.includes(category.name)) {
              categoriesList.push(category.name);
            }
          });
        });

        setCategories(categoriesList);
      });
    };
    getAllCategories();
  }, []);

  // CHECK IF CATEGORY IS SELECTED
  const isSelected = (post) => {
    return post.categories.some(
      (category) => category.name === selectedCategory
    );
  };

  // console.log(categories);

  return (
    <GlobalStateContext.Provider
      value={{
        posts,
        pagination,
        setPagination,
        categories,
        selectedCategory,
        setSelectedCategory,
        isSelected,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateContext, GlobalStateProvider };
