const Router = require("express")
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const config = require("config")
const {check, validationResult} = require("express-validator")
const jwt = require("jsonwebtoken")
const router = new Router()

router.post('/registration',
    [
        check("email", "Некорректный email").isEmail(),
        check("password", "Некорректный password").isLength({min: 3, max: 16}),
    ],
    async function (req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Uncorrected request", errors})
            }

            const {email, password} = req.body

            const candidate = await User.findOne({email})

            if (candidate) {
                return res.status(400).json({message: `Пользователь с email ${email} уже существует`})
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const user = new User({email, password: hashPassword})

            await user.save()
            return res.json({message: "Пользователь был создан"})

        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

router.post('/authorization',
    async function (req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({email})
            if (!user) {
                return res.status(404).json({message: "Пользователь не найден"})
            }

            const isPasswordValid = bcrypt.compareSync(password, user.password)
            if (!isPasswordValid) {
                return res.status(400).json({message: "Неверный пароль"})
            }
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    avatar: user.avatar,
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

module.exports = router