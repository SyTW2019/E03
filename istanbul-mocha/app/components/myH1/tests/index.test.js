import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from 'react-testing-library';
import "jest-dom/extend-expect";
import renderer from "react-test-renderer";

import H1 from '../index';

describe('<H1 />', () => {

  afterEach(cleanup);

  it('render', () => {
    const div = document.createElement(div);
    ReactDOM.render(<H1/>,div);
  });

  it('should render a prop', () => {
    const {getByTestId} = render(<H1 title="Prueba"/>)
    expect(getByTestId('h1')).toHaveTextContent("Prueba");
  });

  it('should render its text', () => {
    const prueba = "Prueba"
    const { queryByText } = render(<H1 title={prueba}/>);
    expect(queryByText(prueba)).not.toBeNull();
  });

  it('Matches snapshots', () => {
    const tree = renderer.create(<H1 title="save"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
