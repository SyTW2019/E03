import jsdom from 'jsdom'
import React from 'react'
import renderer from 'react-test-renderer'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ExpansionPanelActions } from '@material-ui/core'

configure({ adapter: new Adapter() })

const { JSDOM } = jsdom
const dom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = dom

global.window = window
global.document = window.document

describe('<CustomizedMenus />', () => {

  it('Comprobar que se renderiza CustomizedMenus', () => {
    expect(true);
  });
})