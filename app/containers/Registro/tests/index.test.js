import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from 'react-testing-library';
import "jest-dom/extend-expect";
import renderer from "react-test-renderer";

import Registro from '../index';
import SignUp from '../../../components/SignUp'

const className = 'name';
const renderComponent = (props = {}) =>
  render(<Registro className={name} {...props} />);

describe('<Registro />', () => {

  afterEach(cleanup);

  it('render', () => {
      const div = document.createElement(div);
      ReactDOM.render(<Registro/>,div);
  });

  it('should render the signup component', () => {
    const { container } = renderComponent();
    const element = container.querySelector('div');
    expect(element).not.toBeNull();
  });
});
