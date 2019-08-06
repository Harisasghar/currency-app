import * as React from 'react';
import styled from 'styled-components';
import RowItem from './RowItem';
import { CurrencyRate } from '../Utils/types';
import { Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import constants from '../Utils/constants';

interface CurrencyItemProps {
  item: CurrencyRate;
}
const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1em;
`;
const ValuesDiv = styled.div`
  margin: .3em 0 .3em 0;
  padding: 0 .3em 0 .3em;
  border: 1px solid lightgray;
  &:hover{
    border: 1px solid #a1a1a1;
    cursor: pointer;
  }
`;
const CurrencyRow = styled.div`
  margin: .5em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: ${constants.screen.small + 'px'}) { 
    grid-template-columns: 1fr 1fr; 
    margin: 1em;
  } 
`;

const IconDiv = styled.div`
 margin: 1.5em 0 0 -1.1em;
 @media (max-width: ${constants.screen.small + 'px'}) { 
  margin: 3em 0 0 -1.1em;
  } 
 svg { background: white; }
`;

const CurrencyItem: React.FC<CurrencyItemProps> = (props) => {
  const [collapse, setCollapse] = React.useState(true);
  return (
    <ItemContainer>
      <ValuesDiv onClick={() => { setCollapse(!collapse) }}>
        <CurrencyRow>
          <RowItem label="Currency" val={props.item.baseCurrency}></RowItem>
          <RowItem label="Amount" val={props.item.amount}></RowItem>
          <RowItem label="Buy rate transfer" val={props.item.buyRateTransfer}></RowItem>
          <RowItem label="Sell rate transfer" val={props.item.sellRateTransfer}></RowItem>
        </CurrencyRow>
        <Collapse isOpen={!collapse}>
          <CurrencyRow>
            <RowItem label="Country" val={props.item.country}></RowItem>
            <RowItem label="Updated" val={(new Intl.DateTimeFormat('no-NO').format(new Date(props.item.updatedDate)))}></RowItem>
            <RowItem label="Mid rate" val={props.item.midRate}></RowItem>
            <RowItem label="Change in mid rate" val={props.item.changeInMidRate}></RowItem>
            <RowItem label="Prev. mid rate" val={props.item.previousMidRate}></RowItem>
            <RowItem label="Buy rate" val={props.item.buyRateCash}></RowItem>
            <RowItem label="Sell rate" val={props.item.sellRateCash}></RowItem>
          </CurrencyRow>
        </Collapse>
      </ValuesDiv>
      <IconDiv>
        <FontAwesomeIcon size="lg" color="#6ac7b0" icon={collapse ? "chevron-circle-down" : "chevron-circle-up"} />
      </IconDiv>
    </ItemContainer>
  );
};

export default CurrencyItem;
