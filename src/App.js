/* global fetch */
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
      companyName: {value: 'All Companies', label: 'All Companies'},
      companies: ['test'],
      sortBy: {value: 'last_name_ascn', label: 'Last Name ⇧'},
      sortByOptions: [
        {value: 'first_name_ascn', label: 'First Name ⇧'},
        {value: 'first_name_desc', label: 'First Name ⇩'},
        {value: 'last_name_ascn', label: 'Last Name ⇧'},
        {value: 'last_name_desc', label: 'Last Name ⇩'},
        {value: 'company_name_ascn', label: 'Company  ⇧'},
        {value: 'company_name_desc', label: 'Company  ⇩'}]
    }

    this.handleUpdateName = this.handleUpdateName.bind(this)
    this.handleUpdateCompany = this.handleUpdateCompany.bind(this)
    this.handleUpdateSortBy = this.handleUpdateSortBy.bind(this)
    this.findSortBy = this.findSortBy.bind(this)
    this.fetchCustomerList = this.fetchCustomerList.bind(this)
  }

  componentDidMount () {
    this.fetchCustomerList()
  }

  async fetchCustomerList () {
    const sortBy = `sort_by=${this.state.sortBy.value}`
    const name = `name=${this.state.customerName}`
    const company = `company=${this.state.companyName.value}`
    const response = await fetch(`http://localhost:3000/customers?${sortBy}&${name}&${company}`)
    const json = await response.json()
    this.setState({
      companies: json.companies,
      customers: json.customers,
      sortBy: this.findSortBy(json.params.sortBy),
      customerName: json.params.name,
      companyName: {value: json.params.company, label: json.params.company}
    })
  }

  findSortBy (sortParam) {
    // NOTE: I like to include a basic catch ahead of iteration when I can.
    if (sortParam === undefined) { return this.state.sortBy }
    let result
    // LOOP through sortOptions - return the obj which matches input
    this.state.sortByOptions.map((opt) => {
      if (opt.value === sortParam) { result = opt }
    })
    // IF no option is found with the given input return the existing state.
    return result ? result : this.state.sortBy
  }

  async handleUpdateName (e) {
    await this.setState({customerName: e.target.value})
    this.fetchCustomerList()
  }

  async handleUpdateCompany (e) {
    await this.setState({companyName: e})
    this.fetchCustomerList()
  }

  async handleUpdateSortBy (e) {
    await this.setState({sortBy: e})
    this.fetchCustomerList()
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
          sortByOptions={this.state.sortByOptions}
          handleUpdateName={this.handleUpdateName}
          handleUpdateCompany={this.handleUpdateCompany}
          handleUpdateSortBy={this.handleUpdateSortBy} />
      </div>
    )
  }
}

export default App
