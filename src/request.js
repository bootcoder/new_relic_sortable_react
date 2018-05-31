/* global fetch */
async function fetchCustomerList (state) {
  const sortBy = `sort_by=${state.sortBy.value}`
  const name = `name=${state.customerName}`
  const company = `company=${state.companyName.value}`
  const params = `customers?${sortBy}&${name}&${company}`
  const url = `https://bootcoder-relic-search-api.herokuapp.com/${params}`
  const response = await fetch(url)
  const json = await response.json()
  await window.history.replaceState(null, null, params)
  return json
}

export default fetchCustomerList
