const {faker} = require('@faker-js/faker');
const express = require('express');
const app = express();
const port = 8000;



const newFakeUser = () => ({
    id: faker.datatype.uuid(),
    firstName : faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phoneNum: faker.phone.number(),
    password: faker.internet.password()
});


const NewFakeCompany = () => ({
    id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country()
    }
});



app.get('/new/user', (req, res) => {
    const newUser = newFakeUser();
    res.json(newUser);
});



app.get('/new/company', (req, res) => {
    const newCompany = NewFakeCompany();
    res.json(newCompany);
});



app.get('/new/user-and-company', (req, res) => {
    const newUser = newFakeUser();
    const newCompany = NewFakeCompany();
    const result = {
    user: newUser,
    company: newCompany
    };
    res.json(result);
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );