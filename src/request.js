/* global fetch */
async function fetchCustomerList (state) {
  const sortBy = `sort_by=${state.sortBy.value}`
  const name = `name=${state.customerName}`
  const company = `company=${state.companyName.value}`
  const response = await fetch(`http://localhost:3000/customers?${sortBy}&${name}&${company}`)
  const json = await response.json()
  return json
}

export default fetchCustomerList
