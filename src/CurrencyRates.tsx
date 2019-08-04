import * as React from 'react';
import styled from 'styled-components';
import { Input, Button, Table } from 'reactstrap';
import { useEffect } from 'react';
import CurrencyApi from './CurrencyApi';
import { CurrencyRate } from './types';

const ArticleStyled = styled.article`
`;

const CurrencyRates: React.FC = () => {
  const [state, setState] = React.useState({
    rates: new Array<CurrencyRate>()
  });

  useEffect(() => {
    CurrencyApi.Convert('NOK')
    .then((response:any) => {
      console.log(response);
      setState({rates: response.data});
    });
  }, []);

  return (
  <ArticleStyled>
    <div>
      <span>Currency rates against Norwegian kroner - NOK</span>
      <Button color="info" size="sm">Refresh</Button>
      </div>
    <div>
      <span>filter by currency:</span>
      <Input type="text" name="filter" id="filter" placeholder="Currency" />
    </div>
    <div>
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
          {state.rates.map((x, i) => 
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
    </div>
  </ArticleStyled>);
};

export default CurrencyRates;
