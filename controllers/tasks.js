const { taskModal } = require('../modals/Task');

const getAllTasks = async (req, res) => {
	try {
		let tasks = await taskModal.find({});
		res.status(200).json({ tasks });
	} catch (error) {
		res.status(404).json({ error });
	}
};

const createTask = async (req, res) => {
	const body = req.body;
	try {
		const task = await taskModal.create(body);
		res.status(201).json(task);
	} catch (error) {
		res.status(400).json({ error });
	}
};

const getTaskById = async (req, res) => {
	const id = req.query.id ? req.query.id : '';
	try {
		let task = await taskModal.findById({ _id: id });
		res.status(200).json({ task });
	} catch (error) {
		res.status(404).json({ error });
	}
};

const updateTask = async (req, res) => {
	const id = req.query.id ? req.query.id : '';
	const body = req.body;
	try {
		const task = await taskModal.findByIdAndUpdate(id, body, {
			new: true,
			runValidators: true,
		});
		res.status(200).json({ task });
	} catch (error) {
		res.status(404).json({ error });
	}
};

const deleteTask = async (req, res) => {
	const id = req.query.id ? req.query.id : '';
	try {
		const task = await taskModal.deleteOne({ _id: id });
		res.status(200).json(task);
	} catch (error) {
		res.status(404).json({ error });
	}
};

module.exports = { getAllTasks, createTask, getTaskById, updateTask, deleteTask };
