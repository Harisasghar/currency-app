import React from 'react';
import CurrencyItem from "../../Currency/CurrencyItem";
import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

const testCurrency = {
  "baseCurrency": "USD",
  "quoteCurrency": "NOK",
  "country": "US",
  "updatedDate": new Date("2019-04-25 09:00:00.0"),
  "amount": 1,
  "buyRateTransfer": 8.6718,
  "sellRateTransfer": 8.6068,
  "midRate": 8.6393,
  "changeInMidRate": 0.0622,
  "previousMidRate": 8.5771,
  "buyRateCash": 9.0085,
  "sellRateCash": 8.2801
}

const renderer = ShallowRenderer.createRenderer();

it('Test Currency list component element structure', () => {
  renderer.render(<CurrencyItem item={testCurrency} />);  
  const result = renderer.getRenderOutput();
  expect(result.props.children.length).toEqual(2);
  expect(result.props.children[0].props.children.length).toEqual(2);
  expect(result.props.children[0].props.children[0].props.children.length).toEqual(4);
  expect(result.props.children[0].props.children[1].props.children.props.children.length).toEqual(7);
});