import React from 'react';
import jsdom from 'jsdom';
import { render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

import A from '../A';

configure({ adapter: new Adapter() })

const { JSDOM } = jsdom;
const dom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = dom;

global.window = window;
global.document = window.document;

describe('<A />', () => {
  it('should render an <a> tag', () => {
    const { container } = render(<A />);
    expect(container.querySelector('a')).not.toBeNull();
  });

  it('should have a class attribute', () => {
    const { container } = render(<A />);
    expect(container.querySelector('a').hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<A id={id} />);
    expect(container.querySelector('a').id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<A attribute="test" />);
    expect(container.querySelector('a[attribute="test"]')).toBeNull();
  });
});
