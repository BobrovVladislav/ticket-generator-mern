const Router = require("express")
const Teacher = require("../models/Teacher")
const Student = require("../models/Student")
const bcrypt = require("bcryptjs")
const config = require("config")
const {check, validationResult} = require("express-validator")
const jwt = require("jsonwebtoken")
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')

router.post('/registration-teacher',
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

            const candidate = await Teacher.findOne({email})

            if (candidate) {
                return res.status(400).json({message: `Пользователь с email ${email} уже существует`})
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const teacher = new Teacher({email, password: hashPassword})

            await teacher.save()
            return res.json({message: "Пользователь {Учитель} был создан"})

        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

router.post('/registration-student',
    [
        check("gradeBook", "Некорректный № зачётной книжки").isLength({min: 8, max: 16}),
    ],
    async function (req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Uncorrected request", errors})
            }

            const {faculty, group, gradeBook} = req.body

            const candidate = await Student.findOne({gradeBook})

            if (candidate) {
                return res.status(400).json({message: `Пользователь с зачётной книжкой №${gradeBook} уже существует`})
            }
            const student = new Student({faculty, group, gradeBook})

            await student.save()
            return res.json({message: "Пользователь {Студент} был создан"})

        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

router.post('/authorization-teacher',
    async function (req, res) {
        try {
            const {email, password} = req.body
            const user = await Teacher.findOne({email})
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

router.post('/authorization-student',
    async function (req, res) {
        try {
            const {faculty, group, gradeBook} = req.body
            const student = await Student.findOne({gradeBook})
            if (!student) {
                return res.status(404).json({message: "Пользователь не найден"})
            }

            const token = jwt.sign({id: student.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                student: {
                    id: student.id,
                    faculty: student.faculty,
                    group: student.group,
                    gradeBook: student.gradeBook,
                    avatar: student.avatar,
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

//teacher
router.get('/auth', authMiddleware,
    async (req, res) => {
        try {
            const user = await Teacher.findOne({_id: req.user.id})
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    avatar: user.avatar
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

module.exports = router