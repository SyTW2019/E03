/**
 * Testing our link component
 */

import React from 'react';
import jsdom from 'jsdom';
import { render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

import A from '../index';

configure({ adapter: new Adapter() })

const { JSDOM } = jsdom;
const dom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = dom;

global.window = window;
global.document = window.document;

const href = 'http://mxstbr.com/';
const children = <h1>Test</h1>;
const renderComponent = (props = {}) =>
  render(
    <A href={href} {...props}>
      {children}
    </A>,
  );

describe('<A />', () => {
  it('should render an <a> tag', () => {
    const { container } = renderComponent();
    expect(container.querySelector('a')).not.toBeNull();
  });

  it('should have an href attribute', () => {
    const { container } = renderComponent();
    expect(container.querySelector('a').href).toEqual(href);
  });

  it('should have children', () => {
    const { container } = renderComponent();
    expect(container.querySelector('a').children).toHaveLength(1);
  });

  it('should have a class attribute', () => {
    const className = 'test';
    const { container } = renderComponent({ className });
    expect(container.querySelector('a').classList).toContain(className);
  });

  it('should adopt a target attribute', () => {
    const target = '_blank';
    const { container } = renderComponent({ target });
    expect(container.querySelector('a').target).toEqual(target);
  });

  it('should adopt a type attribute', () => {
    const type = 'text/html';
    const { container } = renderComponent({ type });
    expect(container.querySelector('a').type).toEqual(type);
  });
});
