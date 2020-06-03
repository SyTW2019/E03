import React from 'react'
import jsdom from 'jsdom'
import { render } from '@testing-library/react'
import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'

import Wrapper from '../Wrapper'

configure({ adapter: new Adapter() })

const { JSDOM } = jsdom
const dom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = dom

global.window = window
global.document = window.document

describe('<Wrapper />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<Wrapper />)
    expect(container.querySelector('div')).not.toBeNull()
  })

  it('should have a class attribute', () => {
    const { container } = render(<Wrapper />)
    expect(container.querySelector('div').hasAttribute('class')).toBe(true)
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const { container } = render(<Wrapper id={id} />)
    expect(container.querySelector('div').id).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<Wrapper attribute="test" />)
    expect(container.querySelector('div[attribute="test"]')).toBeNull()
  })
})
