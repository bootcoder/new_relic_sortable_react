/* global describe, it, expect, beforeEach */
import React from 'react'
import SearchBox from './SearchBox'
import { shallow, mount } from 'enzyme'

describe('<SearchBox />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(
      <SearchBox
        company='New Relic'
        name='Fred'
        sortBy='last_name_ascn' />)
  })

  it('renders without crashing', () => {
    shallow(<SearchBox />)
  })

  it('has param props', () => {
    expect(wrapper.props().company).toEqual('New Relic')
    expect(wrapper.props().name).toEqual('Fred')
    expect(wrapper.props().sortBy).toEqual('last_name_ascn')
  })

  describe('name input', () => {
    let nameInput
    beforeEach(() => {
      nameInput = wrapper.find('#name-input')
    })

    it('has a text input for name', () => {
      expect(nameInput.length).toEqual(1)
    })

    it('has the name param as input value', () => {
      expect(nameInput.get(0).props.defaultValue).toEqual('Fred')
    })
  })
})
