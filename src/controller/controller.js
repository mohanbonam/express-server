const Task = require('../../models/Task')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error })
  }
};

const getTaskById = async (req, res) => {
  try {
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    res.status(200).json({task})
    if(!task) {
      return res.status(404).json({msg: `no task with id: ${taskID}`})
    }
  } catch (error) {
    res.status(500).json({ msg: error })
  }
};

const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  console.log("getting student by id", id);
};

const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  console.log("getting student by id, name", id, name);
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  deleteTask,
  updateTask,
};
