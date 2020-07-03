import jsdom from 'jsdom'
import React from 'react'
import { mount, configure, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../index.jsx'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router'

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
};

global.localStorage = new LocalStorageMock;

configure({ adapter: new Adapter() })

const { JSDOM } = jsdom
const dom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = dom

global.window = window
global.document = window.document

describe('<Header />', () => {
  test('Comprobar que se renderiza Header', () => {
    var history = createMemoryHistory();
    const wrapper = mount(
      <Router history={history}>
        <Header />
      </Router>
    )
    expect(wrapper.find(Header)).toHaveLength(1)
  })  
})
