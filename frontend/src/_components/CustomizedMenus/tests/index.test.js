import jsdom from 'jsdom'
import React from 'react'
import renderer from 'react-test-renderer'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CustomizedMenus from '../index'

configure({ adapter: new Adapter() })

const { JSDOM } = jsdom
const dom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = dom

global.window = window
global.document = window.document

describe('<CustomizedMenus />', () => {

  it('Comprobar que se renderiza CustomizedMenus', () => {
    const wrapper = mount(<CustomizedMenus />)
    expect(wrapper.find(CustomizedMenus)).toHaveLength(1)
  });

  it('Snapshot', () => {  
    const Component = renderer.create(<CustomizedMenus />).toJSON();
    expect(Component).toMatchSnapshot();
  });
})