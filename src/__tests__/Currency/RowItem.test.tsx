import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import RowItem from '../../Currency/RowItem';

const renderer = ShallowRenderer.createRenderer();
it('RowItem sets props to children', () => {
  renderer.render(<RowItem label="testlabel1" val="testval2" />);  
  const result = renderer.getRenderOutput();
  expect(result.props.children[0].props.children).toEqual("testlabel1");
  expect(result.props.children[1].props.children).toEqual("testval2");
});
it('RowItem sets styles on items', () => {
  renderer.render(<RowItem label="testlabel1" val="testval2" />);  
  const result = renderer.getRenderOutput();
  expect(result.type.componentStyle.rules[0]).toContain('text-align: left');

  let itemValue = result.props.children[0].type.componentStyle.rules[0];
  expect(itemValue).toContain('font-size: 14px');
  expect(itemValue).toContain('color: gray');

  let itemLabelRules = result.props.children[1].type.componentStyle.rules;
  expect(itemLabelRules[0]).toContain('font-weight: 500');
});
