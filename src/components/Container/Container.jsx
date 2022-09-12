import React from 'react';

// INCLUDE STYLED-COMPONENTS
import styled from 'styled-components';

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.main`
  background: #ffffff;
  width: 100%;
`;

export default Container;
