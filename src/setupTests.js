import React from 'react'
import 'jest-enzyme'
import { render, mount, shallow, configure } from 'enzyme'
import { createSerializer } from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))

configure({ adapter: new Adapter() })

global.React = React
global.shallow = shallow
global.render = render
global.mount = mount
global.sinon = sinon

jest.mock('./request')
