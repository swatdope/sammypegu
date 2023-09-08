import express from 'express';
import {registerUser, getMe, loginUser} from '../controllers/userControllers.js'
import {protect} from '../middleware/authMiddleware.js'

const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

export default router