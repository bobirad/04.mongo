const { Schema, model } = require('mongoose');
const personSchema = new Schema({
    firstName: {type: String, required: true },
    lastName: {type: String, required: true},
    age: { type: Number, required: true, min: [0, 'Age cannot be negative']}

});

personSchema.methods.sayHi = function () {
    return `${this.firstName} says :Hi, I am ${this.age} years old`;
};

const Person = model('Person', personSchema);

module.exports = Person;