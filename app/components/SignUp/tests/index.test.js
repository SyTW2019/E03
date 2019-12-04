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
});
