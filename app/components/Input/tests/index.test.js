import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from 'react-testing-library';
import "jest-dom/extend-expect";
import renderer from "react-test-renderer";

import Input from '../index';

const name='Prueba';
const ref='/Prueba';
const type='otraPrueba';
const value='valorPrueba';
const onChange='funcionPrueba';
const renderComponent = ( props = {} ) => render(<Input name={name} {...props}/>);

describe('<Input />', () => {

  afterEach(cleanup);

  it('render', () => {
    const div = document.createElement(div);
    ReactDOM.render(<Input/>,div);
  });

  it('should have an name attribute', () => {
    const { container } = renderComponent();
    const element = container.querySelector('input');
    expect(element.hasAttribute('name')).toBe(true);
  });

  it('Matches snapshots', () => {
    const tree = renderer.create(<Input/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
