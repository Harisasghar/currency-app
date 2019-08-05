import * as React from 'react';
import styled from 'styled-components';
import { CurrencyRate } from '../types';
import RowItem from './RowItem';
import constants from '../constants';

interface CurrencyListProps {
  rates: CurrencyRate[];
}

const ListStyled = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;
`;

const CurrencyRow = styled.div`
  margin: 1em;
  padding: 1em;
  border: 1px solid lightgray;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  @media (max-width: ${constants.screen.small + 'px'}) { 
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const CurrencyList: React.FC<CurrencyListProps> = (props) => {
  return (
    <ListStyled>
          <li>
          { props.rates.map((x, i) =>
          (<CurrencyRow key={i}>
              <RowItem label="Currency" val={x.baseCurrency}></RowItem>
              <RowItem label="Country" val={x.country}></RowItem>
              <RowItem label="Updated" val={(new Intl.DateTimeFormat('no-NO').format(new Date(x.updatedDate)))}></RowItem>
              <RowItem label="Amount" val={x.amount}></RowItem>
              <RowItem label="Buy rate transfer" val={x.buyRateTransfer}></RowItem>
              <RowItem label="Sell rate transfer" val={x.sellRateTransfer}></RowItem>
              <RowItem label="Mid rate" val={x.midRate}></RowItem>
              <RowItem label="Change in mid rate" val={x.changeInMidRate}></RowItem>
              <RowItem label="Prev. mid rate" val={x.previousMidRate}></RowItem>
              <RowItem label="Buy rate" val={x.buyRateCash}></RowItem>
              <RowItem label="Sell rate" val={x.sellRateCash}></RowItem>
            </CurrencyRow>))
            }
          </li>
        </ListStyled>
  ) ;
};

export default CurrencyList;
