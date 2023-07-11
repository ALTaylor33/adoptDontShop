

const { User, Pet } = require('../models');

const resolvers = {
  Query: {
    getUsers: async () => {
      return User.find();
    },

    getUserById: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    getPets: async () => {
      return Pet.find();
    },

    getPetById: async (parent, { petId }) => {
      return Pet.findOne({ _id: petId });
    },
  },

  Mutation: {
    createUser: async (parent, { username, email, password, address, phone }) => {
      return await User.create({ username, email, password, address, phone });
    },
    savePet: async (parent, { name, breed, species, gender, color }) => {
      return await Pet.create({ name, breed, species, gender, color });


    },
    deleteUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
    deletePet: async (parent, { petId }) => {
      return Pet.findOneAndUpdate(
        { _id: petId },

      );
    },
  }
}


module.exports = resolvers;