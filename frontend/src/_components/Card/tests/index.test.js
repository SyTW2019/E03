import jsdom from 'jsdom'
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Card from '../index'

configure({ adapter: new Adapter() })

const { JSDOM } = jsdom;
const dom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = dom;

global.window = window;
global.document = window.document;

describe('<Card />', () => {
    test('Comprobar que se renderiza Card', () => {
        const wrapper = mount(
            <Card src="images/book.jpg"/>
        );
        expect(wrapper.find(Card)).toHaveLength(1);
      });
});