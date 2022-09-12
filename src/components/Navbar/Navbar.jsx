import React from 'react';

// INCLUDE STYLED-COMPONENTS
import styled from 'styled-components';

// INCLUDE TOOLS FROM REACT-ROUTER-DOM
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
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

      {/* Mobile Icon */}
      <MobileIcon onClick={() => setMobile(!mobile)}>
        <AiOutlineMenu />
      </MobileIcon>

      {mobile && (
        <MobileListWrapper>
          <MenuList>
            <NavController onClick={() => setMobile(false)}>[X]</NavController>
            <NavLink to="/">
              {' '}
              <NavItem id="home" onClick={() => setMobile(false)}>
                [Home]{' '}
              </NavItem>
            </NavLink>
            <NavLink to="/posts" onClick={() => setMobile(false)}>
              <NavItem id="post">[Posts] </NavItem>
            </NavLink>
            <NavLink to="/design-story" onClick={() => setMobile(false)}>
              {' '}
              <NavItem>[Design Story]</NavItem>
            </NavLink>{' '}
          </MenuList>
        </MobileListWrapper>
      )}
    </NavWrapper>
  );
};

// .............STYLES................

const NavWrapper = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin: 2rem auto;
`;
const Logo = styled.div`
  flex: 30%;
`;
const NavMenu = styled.nav`
  flex: 70%;

  @media (max-width: 500px) {
    display: none;
  }
`;
const NavListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  width: auto;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
`;
const NavItem = styled.li`
  & {
    list-style-type: none;
    font-size: 1rem;
    font-weight: 400;

    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
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
const MobileIcon = styled.div`
  & {
    display: none;

    @media (max-width: 500px) {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

const MobileListWrapper = styled.div`
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
`;

const MenuList = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
  width: 80%;
  height: 50%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NavController = styled.span`
  margin-top: -5rem;
  font-size: 1.5rem;
`;

export default Navbar;
