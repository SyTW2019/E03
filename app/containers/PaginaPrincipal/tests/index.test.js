import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from 'react-testing-library';
import "jest-dom/extend-expect";
import renderer from "react-test-renderer";

import Card from '../../../components/Card/index'
import Registro from '../index'

describe('<Registro />', () => {

  afterEach(cleanup);

  it('render', () => {
      const div = document.createElement(div);
      ReactDOM.render(<Registro/>,div);
  });

  it('should render an Card component', () => {
    const { container } = render(<Card />);
    expect(container).not.toBeNull();
  });

  it('Matches snapshots', () => {
    const tree = renderer.create(<Registro title="save"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });


});