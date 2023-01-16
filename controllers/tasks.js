const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');  //including our middleware to prevent redundant use of try catch block for each query to handle errors
const { createCustomError } = require('../errors/custom-error');

// Queries: for creating different queries refer mongoose docs-> queries
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
})
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
})
const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if(!task){ return next(createCustomError(`No task with id : ${taskID}`, 404)); }
  res.status(200).json({ task });
})
const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if(!task){ return next(createCustomError(`No task with id : ${taskID}`, 404)); }
  res.status(200).json({ task });
})
const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true }); //parameters provided to prevent an error which is by updating we can make name an empty string which we do not allow in validation so changing it.
  if(!task){ return next(createCustomError(`No task with id : ${taskID}`, 404)); }
  res.status(200).json({ task });
})

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask }