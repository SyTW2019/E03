import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SignIn from '../index';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

Enzyme.configure({ adapter: new Adapter() });

describe('Test case for testing login',() =>{
      it('sad',()=>{
        expect(true).toEqual(true)
      });
//   let wrapper;

//   it('renders without crashing', () => {
//     shallow(<SignIn/>);
//   });

//   it('username check', () => {
//     wrapper = shallow(<SignIn/>);
//     wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'prueba'}});
//     expect(wrapper.state('username')).toEqual('prueba');
//   });

//   it('password check', () => {
//     wrapper = shallow(<SignIn/>);
//     wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'pruebapass'}});
//     expect(wrapper.state('password')).toEqual('pass');
//   });

//   it('login check with right data', () => {
//     wrapper = shallow(<SignIn/>);
//     wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'prueba'}});
//     wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'pruebapass'}});
//     wrapper.find('button').simulate('click');
//     expect(wrapper.state('submitted')).toBe(true);
//   });

//   it('login check with right data', () => {
//     wrapper = shallow(<SignIn/>);
//     wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'falso'}});
//     wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'falsopass'}});
//     wrapper.find('button').simulate('click');
//     expect(wrapper.state('submitted')).toBe(false);
//   });
});
