const db = require('../config/connection');
const { User, Pet} = require('../models');

const userData = require('./userData.json');
const petsData = require('./petsData.json');


db.once('open', async () => {
    await User.deleteMany({});
    await Pet.deleteMany({});

    const users = await User.insertMany(userData);
    const pets = await Pet.insertMany(petsData);

    console.log('Seeding completed');
    process.exit(0);
})