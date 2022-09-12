import React from 'react';

import styled from 'styled-components';

const Button = ({ value, actionHandler }) => {
  return <CustomButton onClick={actionHandler}>{value}</CustomButton>;
};

const CustomButton = styled.button`
  & {
    background-color: #24eba3;
    color: #fff;
    margin-top: 3rem;
    padding: 0.5rem 0.9rem;
    width: auto;
    font-size: 1rem;
    font-weight: 400;
    border: none;
  }

  &:hover {
    background: white;
    border: 2px solid #24eba3;
    color: #24eba3;
    -webkit-transition: 0.5s forward;
    transition: 0.5s forward;
  }
`;

export default Button;
