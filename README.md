
![image](https://github.com/uday160386/faker/assets/31610853/a2d019e8-f430-49fa-bc9b-46ec996cfdcd)

# Data mocking using Faker

Ideally, test data is of priority and the project teams always face an issue in getting the relevant and realistic test data for pre-production activities. More issues(refresh of data; data manipulations etc.,)arise, when programs consume data from a shared environment. Sometimes, requirements of data varies and a new set of data should be replicated through external tools and technologies.

Many commercial data mocking/stubbing tools are available in the market, but as a open source lover, I recommend using Faker library.

Faker is a open source data mocking library that is available in Java, Python, Ruby and JavaScript. This post shares information on how to

* use faker.js?

* add new data set

* customize the data?

Below are the steps to follow

Step 1:
Install faker.js nodejs module.
Step 2:
Now, declare the faker module inside your js file and invoke the data .
```
var data = require('faker');
// name moduele contains the firstname and lastname functions and this will retrieve n
var firstname = data.name.firstName();
var lastname = data.name.lastName();
//Customized format of test data
data.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
// outputs: "Uday, Kumar Mr."
Faker have a pre-defined format of test data to supports different categories as below:
![image](https://github.com/uday160386/faker/assets/31610853/ae206e7d-f016-4d31-934c-1e5cbce16aa1)

```
Step 3:

How to customize the test data.Localization is possible with below code:

```data.setLocale("en_IND"); // or
data.locale = "en_IND";
```
Manipulate the data in node_modules/faker/lib/en_IND/name/first_name.js according to your requirements.
![image](https://github.com/uday160386/faker/assets/31610853/4be088d6-2c09-4d76-9570-54748b9f3991)

Step 4:
Define new modules and test data in the faker.js .For instance, add a aadhar number module.
1. Add aadhar.js file at node_modules/faker/lib
2. Now add below line in /node_modules/faker/lib/locales/en_IND/index.js
```en_IND.aadhar = require("./aadhar");```
3. Now add folder named aadhar under /node_modules/faker/lib/locales/en_IND/aadhar.

Add three js files : default_country.js, index.js,

default_country.js:
```
module["exports"] = [
"India",
"Indian Republic",
"Bharat",
"Hindustan"
];
```
index.js:
```
var aadhar = {};
module['exports'] = aadhar;
aadhar. uniqueIdentity = require("./uniqueIdentity");
uniqueIdentity.js
module["exports"] = ["Ahsdfjh10303"];
4. Also add the below code at /node_modules/faker/lib/index.js

var Aadhar = require('./aadhar');
self.aadhar = bindAll(new Aadhar(self));
var _definitions = {
"name": ["first_name", "last_name", "prefix", "suffix", "title", "male_first_name", "female_first_name", "male_middle_name", "female_middle_name", "male_last_name", "female_last_name"],
"aadhar":['uniqueIdentity'],
"address": ["city_prefix", "city_suffix", "street_suffix", "county", "country", "country_code", "state", "state_abbr", "street_prefix", "postcode"],
"company": ["adjective", "noun", "descriptor", "bs_adjective", "bs_noun", "bs_verb", "suffix"],
"lorem": ["words"],
"hacker": ["abbreviation", "adjective", "noun", "verb", "ingverb"],
"phone_number": ["formats"],
"finance": ["account_type", "transaction_type", "currency", "iban"],
"internet": ["avatar_uri", "domain_suffix", "free_email", "example_email", "password"],
"commerce": ["color", "department", "product_name", "price", "categories"],
"database": ["collation", "column", "engine", "type"],
"system": ["mimeTypes"],
"date": ["month", "weekday"],
"title": "",
"separator": ""
};
```
Step 5:
Now time to test to aadhar number is available
```
var data = require('faker');
data.locale = "en_IND";
console.log("Aadhar number : "+data.aadhar.uniqueIdentity());
```
### Output :
![image](https://github.com/uday160386/faker/assets/31610853/a4fe4449-e7c8-4de2-bdda-01c2d7fe4263)

### References:
Faker documentation is available at [https://github.com/marak/Faker.js/](https://github.com/faker-js/faker)
