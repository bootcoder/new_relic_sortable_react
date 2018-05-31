import React, { Component } from 'react'
import logo from './logo.svg'
import SearchBox from './SearchBox'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      customers: [],
      customerName: '',
      companyName: {value: 'All', label: 'All Companies'},
      companies: ['test'],
      sortBy: {value: 'last_name_desc', label: 'Last Name ⇩'}
    }

    this.handleUpdateName = this.handleUpdateName.bind(this)
    this.handleUpdateCompany = this.handleUpdateCompany.bind(this)
    this.handleUpdateSortBy = this.handleUpdateSortBy.bind(this)
  }

  handleUpdateName (e) {
    this.setState({customerName: e.target.value})
  }

  handleUpdateCompany (e) {
    this.setState({companyName: e})
  }

  handleUpdateSortBy (e) {
    this.setState({sortBy: e})
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <SearchBox
          customerName={this.state.customerName}
          companyName={this.state.companyName}
          companies={this.state.companies}
          sortBy={this.state.sortBy}
          handleUpdateName={this.handleUpdateName}
          handleUpdateCompany={this.handleUpdateCompany}
          handleUpdateSortBy={this.handleUpdateSortBy} />
      </div>
    )
  }
}

export default App
