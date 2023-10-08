// Write your solution in this file!
var customerName= "bob";
const leastFavoriteCustomer = 'kelvin';

//function to uppercase the global variable
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    //console.log(customerName);
}

//declare a global variable in a function
function setBestCustomer(){
    bestCustomer = 'not bob';
}

//
function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}

//try change leastFavourite customer
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'brian';
}
upperCaseCustomerName();


