import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import "jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { mount } from 'enzyme';

import Input from '../index';

const name='Prueba';
const type='otraPrueba';
const value='valorPrueba';
const change=jest.fn();
const renderComponent = ( props = {} ) =>
    render(<Input name={name} type={type} value={value} onChange={change} {...props}/>);

describe('<Input />', () => {

  afterEach(cleanup);

  it('Render', () => {
    const div = document.createElement(div);
    ReactDOM.render(<Input/>,div);
  });

  it('Should have a name attribute', () => {
    const { container } = renderComponent();
    const element = container.querySelector('input');
    expect(element.hasAttribute('name')).toBe(true);
  });

  it('Should have a type attribute', () => {
    const { container } = renderComponent();
    const element = container.querySelector('input');
    expect(element.hasAttribute('type')).toBe(true);
  });

  it('Should have a value attribute', () => {
    const { container } = renderComponent();
    const element = container.querySelector('input');
    expect(element.hasAttribute('value')).toBe(true);
  });

  it('Matches snapshots', () => {
    let app;
    const tree = renderer.create(<Input name={name} ref={inst => {app=inst}} type={type} value={value} onChange={change}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
