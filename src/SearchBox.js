import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SearchBox.css'

class SearchBox extends Component {
  render () {
    return (
      <div className='SearchBox'>
        <input id='name-input' type='text' defaultValue={this.props.name} onChange={this.props.handleUpdateName} />
      </div>
    )
  }
}

SearchBox.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  handleUpdateName: PropTypes.func.isRequired
}

export default SearchBox
