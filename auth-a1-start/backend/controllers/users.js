const User = require("../models/users");
const bCrypt = require("bcrypt")

exports.createUser = async (req, res) => {
    const email = req.body.email
    const pass = req.body.pass

    User.findOne({ email }).then((user) => {
        if (user) {
            throw new Error()
        } else {
            bCrypt.hash(pass, 12).then((hashedPass) => {
                return User.create({ email, pass: hashedPass }).then((userCreated) => {
                    res.status(201).json({ user: userCreated })
                })
            })
                .catch(error => {
                    const errorReq = new Error(error)
                    errorReq.httpStatusCode = 500
                    res.status(500).json({ error: errorReq.message })
                })
        }
    })
        .catch(error => {
            res.status(500).json({ error: 'user already exists' })
        })
}

exports.getUser = async (req, res) => {
    const email = req.body.email
    const pass = req.body.pass
    let user = ''

    User.findOne({ email }).then((userFound) => {
        user = userFound
        return bCrypt.compare(pass, userFound.pass)
    }).then((matchedPass) => {
        if (matchedPass) {
            res.status(200).json({ user, expiration: setTimer() })
        } else {
            throw new Error()
        }
    })
        .catch(error => {
            res.status(400).json({ error: 'wrong login or pass' })
        })
}

const setTimer = () => {
    const date = new Date()
    const expiration = date.getHours() + 1
    const expireDate = date.setHours(expiration)
    return expireDate
}