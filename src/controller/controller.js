// const pool = require('../../db');
// const queriers =  require('./queries');

const getAllTasks = (req, res) => {
    res.send('Get all tasks')
};

const getTaskById = (req, res) => {
    const id = parseInt(req.params.id);
    res.json({'id': id});
};

const createTask = (req, res) => {
    res.send(req.body)
}

const deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    console.log('getting student by id', id);
}

const updateTask = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    console.log('getting student by id, name', id, name);

}



module.exports =  {
    getAllTasks,
    createTask,
    getTaskById,
    deleteTask,
    updateTask
};