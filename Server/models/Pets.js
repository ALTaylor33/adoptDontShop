const { Schema, model } = require('mongoose');

const petsSchema = new Schema({
    name: {
        type: String,
        required: true
      },
      species: {
        type: String,
        required: true
      },
      breed: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      gender: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: true
      },
      isAdopted: {
        type: Boolean,
        default: false
      },
      availableDate: {
        type: Date
      },
      description: {
        type: String
      },
      images: {
        type: [String]
      },
})

const Pet = model('Pet', petsSchema);

module.exports = Pet;