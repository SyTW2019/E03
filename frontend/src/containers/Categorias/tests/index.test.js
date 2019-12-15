import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from 'react-testing-library';
import "jest-dom/extend-expect";
import renderer from "react-test-renderer";

import Categoria from '../index'

const className = 'name';
const renderComponent = (props = {}) =>
  render(<Categoria className={name} {...props} />);


describe('<Categoria />', () => {

  afterEach(cleanup);

  it('render', () => {
      const div = document.createElement(div);
      ReactDOM.render(<Categoria/>,div);
  });

  it('should render an <h1> tag', () => {
    const { container } = renderComponent();
    const element = container.querySelector('h1');
    expect(element).not.toBeNull();
  });

  it('should adopt a className attribute', () => {
    const className = 'title';
    const { container } = renderComponent({ className });
    const element = container.querySelector('h1');
    expect(element.className).toEqual(className);
  });

  it('Matches snapshots', () => {
    const tree = renderer.create(<Categoria title="save"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });


});