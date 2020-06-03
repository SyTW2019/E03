import jsdom from 'jsdom'
import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Footer from '../index'

configure({ adapter: new Adapter() })

const { JSDOM } = jsdom
const dom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = dom

global.window = window
global.document = window.document

describe('<Footer />', () => {
  test('Comprobar que se renderiza Footer', () => {
    const wrapper = mount(<Footer />)
    expect(wrapper.find(Footer)).toHaveLength(1)
  })
})
