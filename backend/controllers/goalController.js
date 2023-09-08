import Goal from '../models/goalModel.js'
import asyncHandler from 'express-async-handler'
// @desc Get Goals
// routes GET /api/goals
// @access private
export const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

// @desc Set Goals
// routes POST /api/goals
// @access private
export const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(404)
        throw new Error("Please add goals")
    }
    const goal = await Goal.create({
        text: req.body.text
    })
    console.log(req.body);
    res.status(200).json(goal)

})

// @desc Update Goals
// routes PUT /api/goals/:id
// @access private
export const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new:true})


    res.status(200).json(updatedGoal)
})

// @desc Delete Goals
// routes DELETE /api/goals/:id
// @access private
export const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    await goal.deleteOne()
    res.status(200).json({ id: req.params.id})
})  