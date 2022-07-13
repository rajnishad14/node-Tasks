const express = require('express')
const {
	getAllTasks,
	getTaskById,
	updateTask,
	deleteTask,
	createTask,
} = require ('../controllers/tasks') ;

const tasks = express.Router();

tasks.route('/getAll').get(getAllTasks);
tasks.route('/getById').get(getTaskById);
tasks.route('/create').post(createTask);
tasks.route('/update').patch(updateTask);
tasks.route('/delete').delete(deleteTask);

module.exports = { tasks };
