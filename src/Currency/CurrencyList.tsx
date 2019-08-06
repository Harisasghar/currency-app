import * as React from 'react';
import styled from 'styled-components';
import { CurrencyRate } from '../Utils/types';
import CurrencyItem from './CurrencyItem';

interface CurrencyListProps {
  rates: CurrencyRate[];
}

const ListStyled = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;
`;

const CurrencyList: React.FC<CurrencyListProps> = (props) => {
  return (
    <ListStyled>
      <li>
        {props.rates.map((x, i) =>
          (<CurrencyItem item={x} key={i}></CurrencyItem>))
        }
      </li>
    </ListStyled>
  );
};

export default CurrencyList;
