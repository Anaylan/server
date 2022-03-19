const {Router} = require('express')
const { getUsers, register, login, logout, getUserById } = require("../controller/users-controller");
const { getCharacterByTitle, getCharacters } = require('../controller/character-controller');
const { verifyToken } = require("../middleware/verifyToken")
const { refreshToken } = require("../controller/token-controller");
const { body } = require('express-validator');
const {userValidator} = require('../middleware/validators');

const router = Router();

router.get('/hello', (req, res)=> {
    res.send('hello');
})
router.get('/api/users', verifyToken, getUsers);
router.get('/api/users/:id', getUserById);
router.get('/api/characters', getCharacters);
router.get('/api/characters/:title', getCharacterByTitle);
router.get('/api/token', refreshToken);


router.post('/api/signup',
[
    body("username").not().isEmpty().trim()
        .matches(/^[A-Za-z0-9]/).withMessage("Имя пользователя должно содержать только латинские буквы и цифры!"),
    body("password").not().isEmpty().trim()
        .isLength({
            min: 8
        }).withMessage("Пароль должен содержать 8 символов!")
],
 register);
router.post('/api/login', login);


router.delete('/api/logout', logout);

module.exports = router;