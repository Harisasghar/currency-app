import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import RowItem from '../../Currency/RowItem';
import CurrencyList from '../../Currency/CurrencyList';

const testRates = [{
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
},
{
  "baseCurrency": "SEK",
  "quoteCurrency": "NOK",
  "country": "SE",
  "updatedDate": new Date("2019-04-25 09:00:00.0"),
  "amount": 1,
  "buyRateTransfer": 8.6718,
  "sellRateTransfer": 8.6068,
  "midRate": 8.6393,
  "changeInMidRate": 0.0622,
  "previousMidRate": 8.5771,
  "buyRateCash": 9.0085,
  "sellRateCash": 8.2801
}]

const renderer = ShallowRenderer.createRenderer();

it('Currency list sets styling listStyledRules', () => {
  renderer.render(<CurrencyList rates={testRates} />);  
  const result = renderer.getRenderOutput();

  let listStyledRules = result.type.componentStyle.rules[0];
  expect(listStyledRules).toContain('list-style-type: none');
  expect(listStyledRules).toContain('padding-left: 0');
  expect(listStyledRules).toContain('margin-bottom: 0');
});

it('Currency list generates elements from reates prop', () => {
  renderer.render(<CurrencyList rates={testRates} />);  
  const result = renderer.getRenderOutput();
  expect(result.props.children.props.children.length).toEqual(2);
});
