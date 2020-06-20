import jsdom from 'jsdom'
import React from 'react'
import { mount, configure, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../index.jsx'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router'
import localStorage from '../../../../localStorage';

window.localStorage = localStorage;

configure({ adapter: new Adapter() })

const { JSDOM } = jsdom
const dom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = dom

global.window = window
global.document = window.document

describe('<Header />', () => {
  test('Comprobar que se renderiza Header', () => {
    const wrapper = mount(
        <Header />
    )
    expect(wrapper.find(Header)).toHaveLength(1)
  })  
})
