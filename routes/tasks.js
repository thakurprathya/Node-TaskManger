const express = require('express');
const router = express.Router();
const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/tasks');
  
//routes
router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);  //patch request is similar to put request(also used for updating data)
//when using put we try to replace the existing resource while patch is for partial update, i.e in put only prop provided will be updated rest is removed while in patch props remains
//but put method can also be modified to as same functionality as patch

module.exports = router;