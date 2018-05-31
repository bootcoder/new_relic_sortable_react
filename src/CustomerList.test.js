/* global describe, it, expect, beforeEach, mount */

import CustomerList from './CustomerList'

describe('<CustomerList />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(
      <CustomerList
        customers={[]} />)
  })

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('has param props', () => {
    expect(wrapper.props().customers).toEqual([])
  })
})
