import React from 'react';

import styled from 'styled-components';

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.main`
  background: #ffffff;
  height: 90vh;
  width: 100%;
`;

export default Container;
