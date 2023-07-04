
const { User, Pet } = require('../models');

const resolvers = {
  Query: {
    allUsers: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    allPets: async () => {
      return Pet.find();
    },

    pet: async (parent, { breed, age }) => {
      return Pet.findOne({ breed, age });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password, address, phone }) => {
      return await User.create({ username, email, password, address, phone });
    },
    addPet: async (parent, { name, breed, species, gender, color }) => {
      return await Pet.create({ name, breed, species, gender, color });

    },
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
    removePet: async (parent, { petId }) => {
      return Pet.findOneAndUpdate(
        { _id: petId },

      );
    },
  },
};

module.exports = resolvers;

