import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import LogoGif from '../../assets/lizardLogo.gif';

const Home = () => {
  return (
    <>
      <Color></Color>
      <HomeWrapper>
        <TextSection>
          <TitleText>This is Egbadon Jeffrey's Submitted Assessment.</TitleText>

          <ParagraphText>Thank You for this opportunity.</ParagraphText>

          <Button>
            <LinkButton to="/posts">Get Started</LinkButton>
          </Button>
        </TextSection>

        <PictureSection>
          <img src={LogoGif} alt="Lizard Gif" />
        </PictureSection>
      </HomeWrapper>
    </>
  );
};

const Color = styled.div`
  position: absolute;
  background: #24eba3;
  width: 0.5rem;
  height: 94%;
`;

const HomeWrapper = styled.main`
  position: relative;
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: row;
  gap: 3rem;
  justify-content: space-between;
  align-items: center;
`;

const TextSection = styled.section`
  display: flex;
  width: 40%;
  flex-direction: column;
  margin-left: 3rem;
  padding-top: 0rem;
`;
const TitleText = styled.h2`
  font-size: 4rem;
  color: #1c1c1cb6;
`;
const ParagraphText = styled.p`
  font-size: 1.5rem;
`;
const Button = styled.button`
  background-color: #5c5aea;
  margin-top: 3rem;
  height: 3rem;
  width: 50%;
  color: #fff;
  font-size: 1.5rem;
  border: 2px solid #5c5aea;
  -webkit-transition: background-color 0.5s, color 0.5s;
  transition: background-color 0.5s, color 0.5s;
`;
const LinkButton = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
const PictureSection = styled.section`
  position: absolute;
  bottom: 0;
  right: 0;
  flex: 50%;
  height: 50%;
  /* width: 60%; */
`;

export default Home;
