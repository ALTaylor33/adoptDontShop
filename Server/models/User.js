const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true
      },
      SavedPets: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Pets'
        }
      ],
      Donations: 
        {
        type: Number
    }
})

const User = model('User', userSchema);

module.exports = User;