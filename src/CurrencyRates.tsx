import * as React from 'react';
import styled from 'styled-components';
import { Input, Button, Table } from 'reactstrap';
import { useEffect, useCallback } from 'react';
import CurrencyApi from './CurrencyApi';
import { CurrencyRate } from './types';

const ArticleStyled = styled.article`
`;
const TitleDiv = styled.div`
  margin: 2em 0 2em 0;
  text-align: left;  
  display: grid;
  grid-template-columns: 1fr 1fr;
  > :nth-child(1){ text-align: right; padding-top: .3em;}
`;
const TextSpan = styled.span`
  font-size: 18px;
  margin-right: 1em;
`;
const FilterDiv = styled.div`
  margin: 2em 0 2em 0; 
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  > :nth-child(1){ text-align: right; padding-top: .3em;}
  > :nth-child(2){ input { width: auto; } }
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
    CurrencyApi.Convert('NOK')
      .then((response: any) => {
        console.log(response);
        setState({ rates: response.data, filtered: response.data });
      });
  }, []);

  const filter = useCallback((event)=>{
    const val = event.target.value;
    setState((prev:any) => ({...prev, 
      filtered: prev.rates.filter((x:CurrencyRate) => x.baseCurrency.toLowerCase().indexOf(val.toLowerCase()) >-1) }));
  }, []);

  return (
    <ArticleStyled>
      <TitleDiv>
        <div><TextSpan>Currency rates against Norwegian kroner - NOK</TextSpan></div>
        <div><Button color="info" size="md">Reload</Button></div>
      </TitleDiv>
      <FilterDiv>
        <div><TextSpan>Filter by currency:</TextSpan></div>
        <div><Input type="text" name="filter" id="filter" placeholder="Currency" onChange={filter} /></div>
      </FilterDiv>
      <CurrencyDiv>
        <Table hover>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Country</th>
              <th>Last update</th>
              <th>Amount</th>
              <th>buyRateTransfer</th>
              <th>sellRateTransfer</th>
            </tr>
          </thead>
          <tbody>
            {state.filtered.map((x, i) =>
              (<tr key={i}>
                <td>{x.baseCurrency}</td>
                <td>{x.country}</td>
                <td>{x.updatedDate}</td>
                <td>{x.amount}</td>
                <td>{x.buyRateTransfer}</td>
                <td>{x.sellRateTransfer}</td>
              </tr>)
            )}
          </tbody>
        </Table>
      </CurrencyDiv>
    </ArticleStyled>);
};

export default CurrencyRates;
