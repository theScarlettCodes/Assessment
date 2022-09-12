import React from 'react';

// INCLUDE STYLED-COMPONENTS
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingTitle>Loading</LoadingTitle>
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  height: 70vh;
  justify-content: center;
  align-items: center;
`;

const blinker = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }  
`;

const LoadingTitle = styled.h1`
  font-size: 1.5rem;
  animation-name: ${blinker};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

export default Loading;
