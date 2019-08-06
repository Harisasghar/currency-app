import React from 'react';
import './App.scss';
import Header from './Header';
import CurrencyRates from './Currency/CurrencyRates';
import styled from 'styled-components';
import constants from './constants';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronCircleDown, faChevronCircleUp
} from '@fortawesome/free-solid-svg-icons';
library.add( faChevronCircleDown, faChevronCircleUp);

const SectionStyled = styled.section`
  margin: 0 15% 0 15%;
  @media (max-width: ${constants.screen.small + 'px'}) { 
    margin: 0 0 0 1%;
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
