import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './CustomerList.css'

class CustomerList extends Component {
  render () {
    return (
      <div className='CustomerList'>
        <table className='table table-striped text-left'>
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Company</td>
            </tr>
          </thead>
          <tbody>
            {this.props.customers.map((cust, idx) => {
              return (
                <tr key={idx}>
                  <td>{cust.first_name}</td>
                  <td>{cust.last_name}</td>
                  <td>{cust.company_name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired
}

export default CustomerList
