const Router = require('express');
const { getAllTasks, createTask, getTaskById, updateTask, deleteTask } =require('../controller/controller');
const router = Router();

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTaskById).patch(updateTask).delete(deleteTask);


module.exports = router;