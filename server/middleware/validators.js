const {body} = require("express-validator");

const validators = {
    userValidator: [
        body("username").not().isEmpty().trim()
            .matches(/^[A-Za-z0-9]/).withMessage("Имя пользователя должно содержать только латинские буквы и цифры!"),
        body("password").not().isEmpty().trim()
            .isLength({
                min: 8
            }).withMessage("Пароль должен содержать 8 символов!")
    ]
}

const userValidator = () => {
    
}

module.exports = validators;