import * as React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  background-color: #a5e1d2;
  padding: 1em 0 1em 0;
`;

const Header: React.FC = () => {
  return (
  <HeaderStyled>
    <h2>DNB Currency rate</h2>
  </HeaderStyled>);
};

export default Header;
