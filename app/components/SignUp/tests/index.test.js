import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SignUp from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('test user sign up', () => {

  let wrapper;

  it('renders without crashing', () => {
    shallow(<SignUp/>);
  });

  it('username check', () => {
    wrapper = shallow(<SignUp/>);
    wrapper.find('input[type="text"]').simulate('change', {target: {name: 'name', value: 'prueba'}});
    expect(wrapper.state('username')).toEqual('prueba');
  });

  it('email check', () => {
    wrapper = shallow(<SignUp/>);
    wrapper.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'prueba@gmail.es'}});
    expect(wrapper.state('username')).toEqual('prueba');
  });

  it('password check', () => {
    wrapper = shallow(<SignUp/>);
    wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'pruebapass'}});
    expect(wrapper.state('password')).toEqual('pass');
  });

  it('login check with right data', () => {
    wrapper = shallow(<SignUp/>);
    wrapper.find('input[type="text"]').simulate('change', {target: {name: 'name', value: 'prueba'}});
    wrapper.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'prueba@gmail.es'}});
    wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'pruebapass'}});
    wrapper.find('button').simulate('click');
    expect(wrapper.state('submitted')).toBe(true);
  });

});
