const router = require('express').Router();

const {
    login,
    createUser,
    savePet,
    deletePet,
} = require('../../controllers/user-controller.js')

const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveBook);

router.route('/login').post(login);

router.route('/myProfile').get(authMiddleware, getSingleUser);

router.route('/pets/:petId').delete(authMiddleware, deleteBook);

module.exports = router;