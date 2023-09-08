import express from 'express';
import {getGoals, setGoals, updateGoal, deleteGoal} from '../controllers/goalController.js'

const router = express.Router();

// router.get("/", getGoals)
// router.post("/", setGoals)
// router.put("/:id", updateGoal)
// router.delete("/:id", deleteGoal);   These are same as below Syntax

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(setGoals).delete(deleteGoal)



    
export default router