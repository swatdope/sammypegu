import express from 'express';
import {getGoals, setGoals, updateGoal, deleteGoal} from '../controllers/goalController.js'
import {protect} from '../middleware/authMiddleware.js'

const router = express.Router();

// router.get("/", getGoals)
// router.post("/", setGoals)
// router.put("/:id", updateGoal)
// router.delete("/:id", deleteGoal);   These are same as below Syntax

router.route('/').get(protect, getGoals).post(protect, setGoals)
router.route('/:id').put(protect, setGoals).delete(protect, deleteGoal)



    
export default router