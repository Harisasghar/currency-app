import * as React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'reactstrap';
import { useEffect, useCallback } from 'react';
import CurrencyApi from '../Services/CurrencyApi';
import { CurrencyRate } from '../Utils/types';
import CurrencyList from './CurrencyList';
import constants from '../Utils/constants';

const TitleDiv = styled.div`
  margin: 2em 0 2em 0;
  text-align: left;  
  display: grid;
  grid-template-columns: 1fr 1fr;
  > :nth-child(1){ text-align: right; padding-top: .3em; padding-right: 1em;}
  > :nth-child(2){ button { 
      width: auto; 
      @media (max-width: ${constants.screen.small + 'px'}) { width: 90%; } 
    } 
  }
`;
const TextSpan = styled.span`
  font-size: 18px;
`;
const FilterDiv = styled.div`
  margin: 2em 0 2em 0; 
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  > :nth-child(1){ 
      text-align: right; 
      padding-top: .3em; 
      padding-right: 1em;      
    }
  > :nth-child(2){ input { 
      width: 50%; 
      @media (max-width: ${constants.screen.small + 'px'}) { width: 90%; } 
    } 
  }
`;

const CurrencyDiv = styled.div`
  margin: 2em 0 2em 0;
`;


const CurrencyRates: React.FC = () => {
  const [state, setState] = React.useState({
    rates: new Array<CurrencyRate>(),
    filtered: new Array<CurrencyRate>()
  });

  useEffect(() => {
    CurrencyApi.Convert('NOK').then((response: any) => {
      setState({ rates: response.data, filtered: response.data });
    });
  }, []);

  const filter = useCallback((event) => {
    const val = event.target.value;
    setState((prev: any) => ({
      ...prev,
      filtered: prev.rates.filter((x: CurrencyRate) => x.baseCurrency.toLowerCase().indexOf(val.toLowerCase()) > -1)
    }));
  }, []);
  const reload = useCallback(() => {
    CurrencyApi.Convert('NOK').then((response: any) => {
      setState({ rates: response.data, filtered: response.data });
    });
  }, []);

  return (
    <article>
      <TitleDiv>
        <div><TextSpan>Rates against NOK</TextSpan></div>
        <div><Button color="info" size="md" onClick={reload}>Reload</Button></div>
      </TitleDiv>
      <FilterDiv>
        <div><TextSpan>Filter by currency:</TextSpan></div>
        <div><Input type="text" name="filter" id="filter" placeholder="Currency" onChange={filter} /></div>
      </FilterDiv>
      <CurrencyDiv>
        <CurrencyList rates={state.filtered}></CurrencyList>
      </CurrencyDiv>
    </article>);
};

export default CurrencyRates;
