import React, { Component } from 'react'
import logo from './logo.svg'
import SearchBox from './SearchBox'
import CustomerList from './CustomerList'
import fetchHelper from './request'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      customers: [],
      customerName: '',
      companyName: {value: 'All Companies', label: 'All Companies'},
      companyOptions: [{value: 'All Companies', label: 'All Companies'}],
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
    this.findSortByObject = this.findSortByObject.bind(this)
    this.fetchCustomerList = this.fetchCustomerList.bind(this)
    this.setStateFromURL = this.setStateFromURL.bind(this)
    this.buildCompanyOptions = this.buildCompanyOptions.bind(this)
  }

  buildCompanyOptions (companies) {
    let options = [{ value: 'All Companies', label: 'All Companies' }]
    companies.map((company) => {
      return options.push({value: company, label: company})
    })
    return options
  }

  async componentDidMount () {
    await this.setStateFromURL()
    this.fetchCustomerList()
  }

  setStateFromURL () {
    const uri = decodeURI(window.location.href)
    let queryString = {}
    let companyName, customerName, sortBy

    uri.replace(
      new RegExp('([^?=&]+)(=([^&]*))?', 'g'),
      function ($0, $1, $2, $3) { queryString[$1] = $3 }
    )

    companyName = this.findCompanyNameObject(queryString.company)
    customerName = queryString.name || ''
    sortBy = this.findSortByObject(queryString.sort_by)
    return this.setState({companyName, customerName, sortBy})
  }

  async fetchCustomerList () {
    const json = await fetchHelper(this.state)
    this.setState({
      companyOptions: this.buildCompanyOptions(json.companies),
      customers: json.customers,
      sortBy: this.findSortByObject(json.params.sortBy),
      customerName: json.params.name,
      companyName: {value: json.params.company, label: json.params.company}
    })
  }

  findSortByObject (sortParam) {
    // NOTE: I wrote these find function intentionaly non consistent to demonstrate flexibility.
    // NOTE: I like to include a basic catch ahead of iteration when I can.
    if (sortParam === undefined) { return this.state.sortBy }
    let result
    // LOOP through sortOptions - set result when obj matches input
    this.state.sortByOptions.map((option) => {
      if (option.value === sortParam) { result = option }
      return option
    })
    // IF no option is found return the existing state.
    return result ? result : this.state.sortBy
  }

  findCompanyNameObject (name) {
    if (name === '' || name === undefined) { return this.state.companyName }
    let result = this.state.companyOptions.find((el) => el.value === name)
    return result ? result : {value: name, label: name}
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
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 margin-5p pull-right-lg'>
              <SearchBox
                customerName={this.state.customerName}
                companyName={this.state.companyName}
                companyOptions={this.state.companyOptions}
                sortBy={this.state.sortBy}
                sortByOptions={this.state.sortByOptions}
                handleUpdateName={this.handleUpdateName}
                handleUpdateCompany={this.handleUpdateCompany}
                handleUpdateSortBy={this.handleUpdateSortBy} />
            </div>
            <div className='col-md-9 well margin-5p'>
              <CustomerList customers={this.state.customers} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
