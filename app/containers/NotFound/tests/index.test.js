import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from 'react-testing-library';
import "jest-dom/extend-expect";
import renderer from "react-test-renderer";

import NotFound from '../index';

const src = 'test.png';
const alt = 'test';
const renderComponent = (props = {}) =>
  render(<NotFound src={src} alt={alt} {...props} />);


describe('<NotFound />', () => {

    afterEach(cleanup);

    it('render', () => {
        const div = document.createElement(div);
        ReactDOM.render(<NotFound/>,div);
      });

      it('should render an <img> tag', () => {
        const { container } = renderComponent();
        const element = container.querySelector('img');
        expect(element).not.toBeNull();
      });

      it('should have an src attribute', () => {
        const { container } = renderComponent();
        const element = container.querySelector('img');
        expect(element.hasAttribute('src')).toBe(true);
      });

      it('should have an alt attribute', () => {
        const { container } = renderComponent();
        const element = container.querySelector('img');
        expect(element.hasAttribute('alt')).toBe(true);
      });

      it('should not have a class attribute', () => {
        const { container } = renderComponent();
        const element = container.querySelector('img');
        expect(element.hasAttribute('class')).toBe(false);
      });
    
      it('should not adopt a srcset attribute', () => {
        const srcset = 'test-HD.png 2x';
        const { container } = renderComponent({ srcset });
        const element = container.querySelector('img');
        expect(element.hasAttribute('srcset')).toBe(false);
      });

      it('Matches snapshots', () => {
        const tree = renderer.create(<NotFound title="save"/>).toJSON();
        expect(tree).toMatchSnapshot();
      });

});