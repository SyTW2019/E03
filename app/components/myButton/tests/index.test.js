import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from 'react-testing-library';
import "jest-dom/extend-expect";
import renderer from "react-test-renderer";

import Button from '../index';

describe('<Button />', () => {

  afterEach(cleanup);

  it('render', () => {
    const div = document.createElement(div);
    ReactDOM.render(<Button/>,div);
  });

  it('should render a prop title', () => {
    const {getByTestId} = render(<Button title="Prueba"/>)
    expect(getByTestId('button')).toHaveTextContent("Prueba");
  });

  it('Matches snapshots', () => {
    const tree = renderer.create(<Button title="save"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
