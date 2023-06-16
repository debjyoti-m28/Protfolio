const mongoose = require('mongoose');
const { Schema } = mongoose;

const testSchema = new Schema({
  name: String,
  email: String,
  age: Number,
});

const Test = mongoose.model('Test', testSchema);
const newUser = new User({
  name: 'John Doe',
  email: 'john@example.com',
  age: 30,
});
