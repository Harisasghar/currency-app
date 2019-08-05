import React from 'react';
import './App.scss';
import Header from './Header';
import CurrencyRates from './Currency/CurrencyRates';
import styled from 'styled-components';
import constants from './constants';

const SectionStyled = styled.section`
  margin: 0 10% 0 10%;
  @media (max-width: ${constants.screen.small + 'px'}) { 
    margin: 0;
  }
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <Header></Header>
      <SectionStyled>
        <CurrencyRates></CurrencyRates>
      </SectionStyled>
      {/* <FooterStyled></FooterStyled> */}
    </div>
  );
}

export default App;
