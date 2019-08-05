import * as React from 'react';
import styled from 'styled-components';

interface RowItemProps {
  label: string;
  val: string | number | Date;
}

const RowItemDiv = styled.div` text-align: left; `; 
const ItemLabel = styled.span` font-size: 14px; color: gray; `;
const ItemValue = styled.div` font-weight: 500; `;

const RowItem: React.FC<RowItemProps> = (props) => {
  return (
  <RowItemDiv>
    <ItemLabel>{props.label}</ItemLabel>
    <ItemValue>{props.val}</ItemValue>
  </RowItemDiv>);
};

export default RowItem;
