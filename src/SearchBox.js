import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

import 'react-select/dist/react-select.css'
import './SearchBox.css'

class SearchBox extends Component {
  render () {
    return (
      <div className='SearchBox well'>
        <div className='form-group'>
          <div className='row margin-5p'>
            <p className='form-control info-box'>Filter Name / Dropdown Sort</p>
            <input
              id='name-input'
              type='text'
              className='form-control'
              value={this.props.customerName}
              onChange={this.props.handleUpdateName} />
          </div>
          <div className='row margin-5p'>
            <Select
              inputProps={{id: 'company-dropdown'}}
              className='select-margin-top'
              options={this.props.companyOptions}
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
  companyOptions: PropTypes.array.isRequired,
  sortBy: PropTypes.object.isRequired,
  sortByOptions: PropTypes.array.isRequired,
  handleUpdateName: PropTypes.func.isRequired,
  handleUpdateCompany: PropTypes.func.isRequired,
  handleUpdateSortBy: PropTypes.func.isRequired
}

export default SearchBox
