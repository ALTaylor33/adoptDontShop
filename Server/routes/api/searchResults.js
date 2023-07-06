const router = require('express').Router();

const {
    login,
    createUser,
    getUser,
    savePet,
    deletePet,
    saveDonation,
    countDonation
} = require('../../controllers/user-controller.js')

const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, savePet);

router.route('/login').post(login);

router.route('/myProfile').get(authMiddleware, getUser);
router.route('/myProfile').put(authMiddleware, countDonation);
router.route('/myProfile').put(authMiddleware, saveDonation);

router.route('/pets/:petId').put(authMiddleware, savePet);
router.route('/pets/:petId').delete(authMiddleware, deletePet);


module.exports = router;

//notes for self: 
// /myProfile should show getUser info plus saved pets, saved donations, and keep track of donations made
// /search should show search results
// /:petId shows one pet, if logged in, option to save, if saved, option to delete
// /donate shows donation opportunities
// /donate/:organizationId shows one organization user clicked on