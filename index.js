const mongoose = require('mongoose');
const Person = require('./models/Person');
const connectionString = 'mongodb://localhost:27017/testdb'; 
start();
async function start(){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('Database connected');
    const data = await Person.find({});

    console.log(data);
    const person = new Person({
        firstName: 'Ivan',
        lastName: 'Georgiev',
        age: 43
    })
   
    await person.save();
    console.log(data[3].sayHi())
    await mongoose.disconnect();
}
