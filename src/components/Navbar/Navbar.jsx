import React from 'react';

import styled from 'styled-components';

import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <NavWrapper>
      <Logo className="logo">Assessment.</Logo>
      <NavMenu>
        <NavListWrapper>
          <NavLink to="/">
            {' '}
            <NavItem id="home">Home </NavItem>
          </NavLink>
          <NavLink to="/posts">
            <NavItem id="post">Posts </NavItem>
          </NavLink>
          <NavLink to="/design-story">
            {' '}
            <NavItem>Design Story</NavItem>
          </NavLink>{' '}
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
`;
const NavLink = styled(Link)`
  & {
    color: #1c1c1c;
    text-decoration: none;
  }
  &:hover {
    cursor: url('../../assets/cursor-hoverLink.png'), auto;
    color: #24eba3;
  }
`;

export default Navbar;
