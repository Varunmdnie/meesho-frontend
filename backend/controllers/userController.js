let User = require('../model/user')
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')



let register = async (req, res) => {
    try {
        let { usertype, firstName, lastName, email, password, phoneNumber } = req.body

        let salt = await bcrypt.genSalt(10)
        password = await bcrypt.hash(password, salt)

        let user = new User({ usertype, firstName, lastName, email, password, phoneNumber })

        await user.save()
        res.send({ status: 'success', user })
    } catch (error) {
        res.send({ status: 'failed', message: error.message })
    }

}

let login = async (req, res) => {
    try {
        let { email, password } = req.body
        let user = await User.findOne({ "email": email })
        if (!user) {
            return res.status(400).json({ status: 'failed', message: 'User not found' });
        }
        let payload = { id: user.id }

        let isValidPwd = await bcrypt.compare(password, user.password)
        if (!isValidPwd) {
            res.status(400).json({ status: 'failed', message: 'password not valid' })
        }else {
            jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
                if (err) throw err
                user.token = token
                res.status(201).json({ status: 'success', message: 'Loggedin successfully', user })
            })

        }
    } catch (error) {
        res.send({ status: 'failed', message: error.message })
    }
}

module.exports = { login, register }