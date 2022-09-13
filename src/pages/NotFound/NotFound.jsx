import React from 'react';
import { Link } from 'react-router-dom';

// INCLUDE STYLED COMPONENTS
import styled from 'styled-components';
import Button from '../../components/Button/Button';

const NotFound = () => {
  return (
    <Container>
      <NotFoundTitle>Not Found</NotFoundTitle>
      <Message>
        <Span>Sometime in the</Span> future
        <br /> this page will <Span>become active</Span>
      </Message>
      <LinkButton to="/">
        <Button value={'Back To Home'} />
      </LinkButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  /* justify-content: center;
  align-items: center; */
`;
const NotFoundTitle = styled.h1`
  color: #1c1c1c50;
  text-align: left;
  font-size: 10rem;
  font-weight: 600;
`;
const Message = styled.p`
  width: 100%;
  font-size: 4rem;
  font-weight: 900;
  margin-top: -12rem;
  margin-left: 20rem;
`;
const Span = styled.span`
  color: #24eba4;
`;
const LinkButton = styled(Link)`
  color: inherit;
  text-decoration: none;
  text-align: center;
`;

export default NotFound;
