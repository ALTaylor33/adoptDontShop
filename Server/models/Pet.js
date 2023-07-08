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
        type: String,
        maxLength: 255
      },
      images: {
        type: [String]
      },
})

const Pet = model('Pet', petsSchema);

module.exports = Pet;