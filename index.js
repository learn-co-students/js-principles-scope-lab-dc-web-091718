var customerName = "bob";
const leastFavoriteCustomer = "Hello World";

const upperCaseCustomerName = () => {
  customerName = customerName.toUpperCase();
}

const setBestCustomer = () => {
  bestCustomer = "not bob";
}

const overwriteBestCustomer = () => {
  bestCustomer = 'maybe bob';
}

const changeLeastFavoriteCustomer = () => {
  leastFavoriteCustomer = "Bye World";
}
