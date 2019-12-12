import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ReactDOM from 'react-dom';
import { render, cleanup } from 'react-testing-library';
import "jest-dom/extend-expect";
import Registro from '../../Registro'
import Inicio from '../../PaginaPrincipal';
import InicioSesion from '../../InicioSesion';
import Categoria from '../../Categorias';
import NotFound from '../../NotFound';
import Footer from '../../../components/Footer';

import App from '../index';

const renderer = new ShallowRenderer();

describe('<App />', () => {

  it('render', () => {
    const div = document.createElement(div);
    ReactDOM.render(<App/>,div);
  });

  it('should render and match the snapshot', () => {
    renderer.render(<App />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it('should render an Card component', () => {
    const { container } = render(<Inicio />);
    expect(container).not.toBeNull();
  });

  it('should render an Registro component', () => {
    const { container } = render(<Registro />);
    expect(container).not.toBeNull();
  });

  // it('should render an Inicio component', () => {
  //   const { container } = render(<InicioSesion />);
  //   expect(container).not.toBeNull();
  // });

  it('should render an Categoria component', () => {
    const { container } = render(<Categoria />);
    expect(container).not.toBeNull();
  });

  it('should render an NotFound component', () => {
    const { container } = render(<NotFound />);
    expect(container).not.toBeNull();
  });

});
