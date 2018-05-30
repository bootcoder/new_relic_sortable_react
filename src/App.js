import React, { Component } from 'react'
import logo from './logo.svg'
import SearchBox from './SearchBox'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      customers: [],
      name: '',
      company: 'All',
      sortBy: 'last_name_ascn'
    }

    this.handleUpdateName = this.handleUpdateName.bind(this)
  }

  handleUpdateName (e) {
    console.log(e)
    this.setState({name: e.target.value})
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <SearchBox
          name={this.state.name}
          company={this.state.company}
          sortBy={this.state.sortBy}
          handleUpdateName={this.handleUpdateName} />
      </div>
    )
  }
}

export default App
