import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';

import Home from '../pages/Home/Home';
import Posts from '../components/post/Posts';
import Details from '../pages/Details/Details';
import NotFound from '../pages/NotFound/NotFound';

const RouteComponent = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postId" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RouteComponent;
