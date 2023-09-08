import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler';
// @desc Register new User
// routes POST /api/users
// @access Public
export const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all required fields')
    }

    // check if user already exist

    const userExists = await User.findOne({email})
    if(userExists) {
            res.status(400);
            throw new Error('User already Exists')
    }

    // Hash Password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create User

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    if(user) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400);
        throw new Error('Invalid User Data')
    }
})
// @desc Authenticate a User
// routes POST /api/users/login
// @access Public
export const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;
    // check for email
    const user = await User.findOne({ email})
    if(user && (await bcrypt.compare(password, user.password))){
    
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
    })
} else {
    res.status(400);
    throw new Error('Invalid Credentials')
}
})
// @desc Get user Data
// routes GET /api/users/me     
// @access Private
export const getMe = asyncHandler(async(req, res) => {
    const {_id, name, email}  = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        name,
        email,
    })
})


// generate JWT

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
} 

