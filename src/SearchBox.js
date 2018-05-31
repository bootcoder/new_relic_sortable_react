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
        <div className='form-group'>
          <h4>Search Options</h4>
          <div className='row margin-5p'>
            <p className='form-control'>Filter by Name</p>
            <input
              id='name-input'
              type='text'
              className='form-control'
              defaultValue={this.props.customerName}
              onChange={this.props.handleUpdateName} />
          </div>
          <div className='row margin-5p'>
            <Select
              inputProps={{id: 'company-dropdown'}}
              className='select-margin-top'
              options={options}
              onChange={this.props.handleUpdateCompany}
              value={this.props.companyName} />
            <Select
              inputProps={{id: 'sortby-dropdown'}}
              className='select-margin-top'
              options={this.props.sortByOptions}
              onChange={this.props.handleUpdateSortBy}
              value={this.props.sortBy} />
          </div>
        </div>
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
