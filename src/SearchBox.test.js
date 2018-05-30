/* global describe, it, ,sinon, expect, beforeEach, mount, shallow */

import SearchBox from './SearchBox'

describe('<SearchBox />', () => {
  let wrapper
  let nameSpy
  beforeEach(() => {
    nameSpy = sinon.spy()
    wrapper = mount(
      <SearchBox
        company='New Relic'
        name='Fred'
        sortBy='last_name_ascn'
        handleUpdateName={nameSpy} />)
  })

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot()
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

    it('updates the name field onChange', () => {
      nameInput.simulate('change', {target: {value: 'Fredi'}})
      expect(nameSpy.calledOnce).toBe(true)
    })
  })
})
