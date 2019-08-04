import React from 'react';
import './App.scss';
import Header from './Header';
import CurrencyRates from './CurrencyRates';
import styled from 'styled-components';

const SectionStyled = styled.section`
  margin: 0 10% 0 10%;
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
