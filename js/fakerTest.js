var data = require('faker');

data.locale = "en_IND";

console.log("Aadhar number : "+data.aadhar.uniqueIdentity());