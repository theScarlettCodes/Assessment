// include createContext useState
import React, { createContext, useState, useEffect } from 'react';

// Include axios
import axios from 'axios';

// Initialize Context
const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  // Pagination State
  const [pagination, setPagination] = useState(10);

  // Posts State
  const [posts, setPosts] = useState([]);

  // Categories State
  const [categories, setCategories] = useState([]);

  // Selected Category State
  const [selectedCategory, setSelectedCategory] = useState('All');

  // SETTING STATE OF CATEGORIES DISPLAY
  const [openCategories, setOpenCategories] = useState(false);

  // SETTING STATE OF LOADER
  const [loading, setLoading] = useState(true);

  //Use axios to get posts from api after Component render
  // the response with post data is passed to the central post state

  useEffect(() => {
    const getAllPosts = async () => {
      await axios.get(`/api/posts`).then((response) => {
        setPosts(response.data.posts);
      });
    };
    getAllPosts();
    setLoading(false);
  }, []);

  //Use axios to get categories from api after DOM renders
  // assigned the response data gotten from api to data constant, then initialize an array containing a string 'All'
  // then loop the object from response to get the categories
  // then loop through the categories checking if a category name already exists before pushing the category into the categoryList.
  // then the categoryList is passed to the category state.
  // This effect is run once on component render
  useEffect(() => {
    const getAllCategories = async () => {
      await axios.get(`/api/posts`).then((response) => {
        const data = response.data.posts;
        let categoriesList = ['All'];
        data.forEach((category) => {
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

  // isSelected function returns a boolean
  // It takes the post as an argument and checks if any categories matches the selectedCategory
  // If there is a match it returns truthy else falsy
  const isSelected = (post) => {
    return post.categories.some(
      (category) => category.name === selectedCategory
    );
  };

  // console.log(categories);

  // DEFINING FUNCTION FOR CHANGING STATE OF CATEGORY DISPLAY
  const showCategories = () => {
    setOpenCategories(!openCategories);
  };

  return (
    <GlobalStateContext.Provider
      value={{
        loading,
        posts,
        pagination,
        categories,
        selectedCategory,
        openCategories,
        setSelectedCategory,
        isSelected,
        showCategories,
        setPagination,
        setOpenCategories,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateContext, GlobalStateProvider };
