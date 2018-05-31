/* global describe, it, ,sinon, expect, beforeEach, mount */

import SearchBox from './SearchBox'

describe('<SearchBox />', () => {
  let nameSpy
  let companySpy
  let sortSpy
  let wrapper
  beforeEach(() => {
    nameSpy = sinon.spy()
    companySpy = sinon.spy()
    sortSpy = sinon.spy()
    wrapper = mount(
      <SearchBox
        companyName={{value: 'New Relic', label: 'New Relic'}}
        customerName='Fred'
        companies={['Titos', 'Wendys']}
        sortBy={{value: 'first_name_ascn', label: 'First Name ⇧'}}
        sortByOptions={[{value: 'first_name_ascn', label: 'First Name ⇧'}]}
        handleUpdateName={nameSpy}
        handleUpdateCompany={companySpy}
        handleUpdateSortBy={sortSpy} />)
  })

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('has param props', () => {
    expect(wrapper.props().companyName.label).toEqual('New Relic')
    expect(wrapper.props().customerName).toEqual('Fred')
    expect(wrapper.props().sortBy.value).toEqual('first_name_ascn')
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

  describe('company dropdown', () => {
    let dropdown
    beforeEach(() => {
      dropdown = wrapper.find('#company-dropdown')
    })

    it('has a dropdown', () => {
      expect(dropdown.length).toEqual(2)
    })

    it('updates the selected company onChange', () => {
      dropdown.find('input').simulate('change', {value: 'Wendys', label: 'Wendys'})

      // NOTE: this feels pretty hacky, searched quite a bit and it
      // appears the only way to simulate select is to also simulate a tab keypress.
      dropdown.find('input').simulate('keyDown', { keyCode: 9, key: 'Tab' })

      expect(companySpy.called).toBe(true)
    })
  })

  describe('sorting dropdown', () => {
    let dropdown
    beforeEach(() => {
      dropdown = wrapper.find('#sortby-dropdown')
    })

    it('has a dropdown', () => {
      expect(dropdown.length).toEqual(2)
    })

    it('updates sortBy onChange', () => {
      dropdown.find('input').simulate('change', 'company_name_ascn')
      dropdown.find('input').simulate('keyDown', { keyCode: 9, key: 'Tab' })

      expect(sortSpy.called).toBe(true)
    })
  })
})
