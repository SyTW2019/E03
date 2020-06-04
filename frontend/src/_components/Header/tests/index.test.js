import jsdom from 'jsdom'
import React from 'react'
import { mount, configure, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../index'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router'

configure({ adapter: new Adapter() })
const { JSDOM } = jsdom
const dom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = dom

global.window = window
global.document = window.document
// app.test.js

test('redirects to login page', () => {
  const history = createMemoryHistory()
  const wrapper = mount(
    <Router history={history}>
      <Header />
    </Router>
  )
  expect(wrapper.find(Header)).toHaveLength(1)
})
