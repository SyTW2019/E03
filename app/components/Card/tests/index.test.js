import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from 'react-testing-library';
import "jest-dom/extend-expect";
import renderer from "react-test-renderer";

import Card from '../index'

describe('<Card />', () => {

    afterEach(cleanup);

    it('render', () => {
        const div = document.createElement(div);
        ReactDOM.render(<Card/>,div);
    });

    it('Matches snapshots', () => {
        const tree = renderer.create(<Card title="save"/>).toJSON();
        expect(tree).toMatchSnapshot();
      });

});