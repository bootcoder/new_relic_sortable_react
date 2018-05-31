import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

import 'react-select/dist/react-select.css'
import './SearchBox.css'

class SearchBox extends Component {
  constructor () {
    super()
    this.buildCompanyOptions = this.buildCompanyOptions.bind(this)
  }

  buildCompanyOptions () {
    let options = [{ value: 'all', label: 'All Companies' }]
    this.props.companies.map((comp) => {
      options.push({value: comp, label: comp})
      return comp
    })
    return options
  }

  render () {
    const options = this.buildCompanyOptions()

    return (
      <div className='SearchBox'>
        <input
          id='name-input'
          type='text'
          defaultValue={this.props.customerName}
          onChange={this.props.handleUpdateName} />
        <Select
          inputProps={{id: 'company-dropdown'}}
          options={options}
          onChange={this.props.handleUpdateCompany}
          value={this.props.companyName} />
        <Select
          inputProps={{id: 'sortby-dropdown'}}
          options={this.props.sortByOptions}
          onChange={this.props.handleUpdateSortBy}
          value={this.props.sortBy} />
      </div>
    )
  }
}

SearchBox.propTypes = {
  customerName: PropTypes.string.isRequired,
  companyName: PropTypes.object.isRequired,
  companies: PropTypes.array.isRequired,
  sortBy: PropTypes.object.isRequired,
  sortByOptions: PropTypes.array.isRequired,
  handleUpdateName: PropTypes.func.isRequired,
  handleUpdateCompany: PropTypes.func.isRequired,
  handleUpdateSortBy: PropTypes.func.isRequired
}

export default SearchBox
