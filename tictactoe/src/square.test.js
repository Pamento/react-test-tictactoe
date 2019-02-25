import React from 'react';
import Square from './Square';
import { shallow } from 'enzyme';
import './setUpTest';

it('renders without crashing', ()=>{
  const wrapper = shallow(<Square value="x"/>);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.prop('children')).toEqual('x');
}) 