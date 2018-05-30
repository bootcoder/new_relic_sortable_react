import React, { Component } from 'react'
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

export default SearchBox
