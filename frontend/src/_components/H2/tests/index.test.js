import jsdom from 'jsdom'
import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import H2 from '../index'

configure({ adapter: new Adapter() })

const { JSDOM } = jsdom
const dom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = dom

global.window = window
global.document = window.document

describe('<H2 />', () => {
  test('Comprobar que se renderiza H2', () => {
    const text = 'text'
    const wrapper = mount(<H2>{text}</H2>)
    expect(wrapper.find(H2)).toHaveLength(1)
  })
})
