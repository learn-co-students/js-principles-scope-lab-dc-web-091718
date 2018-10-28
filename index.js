// Write your solution in this file!

var customerName = 'bob'

function upperCaseCustomerName() {
  customerName = 'bob'.toUpperCase()
}

function setBestCustomer() {
  bestCustomer =  'not bob'
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
}

//can't change variable declared with const
const leastFavoriteCustomer = "toby"

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = console.warn("TypeError")
}
