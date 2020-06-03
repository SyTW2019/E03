/**
 * Testing our Button component
 */

import React from 'react'
import jsdom from 'jsdom'
import { fireEvent, render } from '@testing-library/react'
import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'

import Button from '../index'

configure({ adapter: new Adapter() })

const { JSDOM } = jsdom
const dom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = dom

global.window = window
global.document = window.document

const handleRoute = () => {}
const href = 'http://mxstbr.com'
const children = <h1>Test</h1>
const renderComponent = (props = {}) =>
  render(
    <Button href={href} {...props}>
      {children}
    </Button>
  )

describe('<Button />', () => {
  it('should render an <a> tag if no route is specified', () => {
    const { container } = renderComponent({ href })
    expect(container.querySelector('a')).not.toBeNull()
  })

  it('should render a <button> tag to change route if the handleRoute prop is specified', () => {
    const { container } = renderComponent({ handleRoute })
    expect(container.querySelector('button')).toBeDefined()
  })

  it('should have children', () => {
    const { container } = renderComponent()
    expect(container.querySelector('a').children).toHaveLength(1)
  })

  it('should handle click events', () => {
    const onClickSpy = jest.fn()
    const { container } = renderComponent({ onClick: onClickSpy })
    fireEvent.click(container.querySelector('a'))
    expect(onClickSpy).toHaveBeenCalled()
  })

  it('should have a class attribute', () => {
    const { container } = renderComponent()
    expect(container.querySelector('a').hasAttribute('class')).toBe(true)
  })

  it('should not adopt a type attribute when rendering an <a> tag', () => {
    const type = 'text/html'
    const { container } = renderComponent({ href, type })
    expect(container.querySelector(`a[type="${type}"]`)).toBeNull()
  })

  it('should not adopt a type attribute when rendering a button', () => {
    const type = 'submit'
    const { container } = renderComponent({ handleRoute, type })
    expect(container.querySelector('button').getAttribute('type')).toBeNull()
  })
})
