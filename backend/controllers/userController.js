let User = require('../model/user')
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')
let Cart = require('../model/cart')
const nodemailer = require('nodemailer')



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
            jwt.sign(payload, process.env.SECRET_KEY, async (err, token) => {
                if (err) throw err
                user.token = token
                let UserCart = await Cart.findOne({userId:user.id})
                
                 res.status(201).json({ status: 'success', message: 'Loggedin successfully', user, UserCart })
            })

        }
    } catch (error) {
        res.send({ status: 'failed', message: error.message })
    }
}

let logout = async (req,res) =>{
    res.json({ status:'success', message: 'Logged out successfully' });
}

let cart = async (req,res) =>{
    res.json(req.user)
}

let forgetPassword = async (req,res) =>{
    try {
        let {email} = req.body
        let user = await User.findOne({email})
        if (!user) {
            return res.status(404).json({ message: 'Email not found' });
        }
        let payload = {id:user._id}
        let resetToken = jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"1hr"})

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'varunmd20@gmail.com',
              pass: 'yxum cptp zviv ebiu'
            }
          });

          let mailOptions = {
            from: 'varunmd20@gmail.com',
            to: email,
            subject: 'Reset password',
            text: `http://localhost:3000/resetPassword/${resetToken}`
          };


        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ message: 'Error sending email' });
            }
            res.json({ message: 'Password reset link has been sent to your email.' });
        });

        
    } catch (error) {
       console.log('error',error)
    }
}

let resetPassword = async (req,res) =>{
    const {token}=req.params
    const {password}=req.body
    try {
          // Verify the JWT token
          const decoded = jwt.verify(token, JWT_SECRET);

          // Find the user by ID
          const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(404).json({ message: 'Invalid or expired token' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Update the user's password
        user.password = hashedPassword;
        await user.save();

        res.json({ message: 'Password has been successfully reset.' });
    } catch (error) {
        return res.status(400).json({ message: 'Invalid or expired token' });
    }

}


module.exports = { login,register,logout,cart,forgetPassword,resetPassword}

