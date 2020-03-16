import jsdom from 'jsdom'
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import H3 from '../index';

configure({ adapter: new Adapter() })

const { JSDOM } = jsdom;
const dom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = dom;

global.window = window;
global.document = window.document;

describe('<H3 />', () => {
  test('Comprobar que se renderiza H3', () => {
    const text='text'
    const wrapper = mount(
        <H3>{text}</H3>
    );
    expect(wrapper.find(H3)).toHaveLength(1);
  });
});
