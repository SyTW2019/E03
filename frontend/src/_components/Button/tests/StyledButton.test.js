import React from 'react';
import jsdom from 'jsdom';
import { render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

import StyledButton from '../StyledButton';

configure({ adapter: new Adapter() })

const { JSDOM } = jsdom;
const dom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = dom;

global.window = window;
global.document = window.document;

describe('<StyledButton />', () => {
  it('should render an <button> tag', () => {
    const { container } = render(<StyledButton />);
    expect(container.querySelector('button')).not.toBeNull();
  });

  it('should have a class attribute', () => {
    const { container } = render(<StyledButton />);
    expect(container.querySelector('button').hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<StyledButton id={id} />);
    expect(container.querySelector('button').id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<StyledButton attribute="test" />);
    expect(container.querySelector('button[attribute="test"]')).toBeNull();
  });
});
