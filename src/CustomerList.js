import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './CustomerList.css'

class CustomerList extends Component {
  render () {
    return (
      <div className='CustomerList'>
        <table>
          <tbody>
            <tr>
              <td>ID</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Company</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            {this.props.customers.map((cust, idx) => {
              return (
                <tr key={idx}>
                  <td>{cust.id}</td>
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
