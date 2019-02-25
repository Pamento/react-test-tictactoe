import React from 'react'
import './setUpTest';
import { shallow, mount } from 'enzyme';
import Board from './Board';

jest.mock('./Square', () => ()=> <div className="square">mockUserCom</div>);

describe('square', () => {
  let squares = Array(9).fill(null);
  it('renders without crashing', () => {
    const wrapper = shallow(<Board squares={squares}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('shows all squares',()=>{
    const wrapper = mount(<Board squares={squares}/>);
    expect(wrapper.find('.square').length).toEqual(9);
  });
})