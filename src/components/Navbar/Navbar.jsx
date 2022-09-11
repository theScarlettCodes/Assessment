import React from 'react';

import styled from 'styled-components';

import { Link, useLocation } from 'react-router-dom';

import DefaultCursor from '../../assets/cursor-default.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <NavWrapper>
      <Logo className="logo">Assessment.</Logo>
      <NavMenu>
        <NavListWrapper>
          <NavItem id="home">
            <NavLink to="/">Home</NavLink>{' '}
          </NavItem>
          <NavItem id="post">
            <NavLink to="/posts">Posts</NavLink>{' '}
          </NavItem>
          <NavItem>
            <NavLink to="/design-story">Design Story</NavLink>{' '}
          </NavItem>
        </NavListWrapper>
      </NavMenu>
    </NavWrapper>
  );
};

const NavWrapper = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;
const Logo = styled.div`
  flex: 30%;
`;
const NavMenu = styled.nav`
  flex: 70%;
`;
const NavListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 2rem;
`;
const NavItem = styled.li`
  & {
    list-style-type: none;
    font-size: 1rem;
    font-weight: 400;
  }
  &:hover {
    color: #ccc;
    cursor: url('../../assets/cursor-default.png'), auto;
  }
`;
const NavLink = styled(Link)`
  & {
    color: #1c1c1c;
    text-decoration: none;
  }
  &:hover {
    color: #ccc;
  }
`;

export default Navbar;
