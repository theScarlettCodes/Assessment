import React from 'react';

// Include Link
import { Link } from 'react-router-dom';

// Include styed component
import styled from 'styled-components';

// Include image
import LogoGif from '../../assets/lizardLogo.gif';

// Include Button Component
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <>
      <Color></Color>
      <HomeWrapper>
        <TextSection>
          <TitleText>This is Egbadon Jeffrey's Submitted Assessment.</TitleText>

          <ParagraphText>Thank You for this opportunity.</ParagraphText>

          <LinkButton to="/posts">
            <Button value={'Get Started'} />
          </LinkButton>
        </TextSection>

        <PictureSection>
          <Image src={LogoGif} alt="Lizard Gif" />
        </PictureSection>
      </HomeWrapper>
    </>
  );
};

// STYLED SECTION

const Color = styled.div`
  position: absolute;
  background: #24eba3;
  width: 0.5rem;
  height: 80%;
`;

const HomeWrapper = styled.main`
  display: flex;
  width: 90%;
  height: 80vh;
  margin: auto;
  flex: 1;
  flex-direction: row;
  gap: 3rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const TextSection = styled.section`
  display: flex;
  width: 60%;
  flex-direction: column;
  margin-left: 0.5rem;
  padding-top: 0rem;
  color: #1c1c1c;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: -20rem;
    font-size: 2rem;
  }

  @media (max-width: 500px) {
    margin-top: -10rem;
    font-size: 2rem;
  }
`;
const TitleText = styled.h2`
  font-size: inherit;
`;
const ParagraphText = styled.p`
  font-size: 1.5rem;
`;

const LinkButton = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
const PictureSection = styled.section`
  width: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;

  @media (max-width: 768px) {
  }
`;

export default Home;
