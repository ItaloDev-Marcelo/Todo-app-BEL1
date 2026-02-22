const express = require('express');
const router = express.Router()
const {addNewTodo,updateOneTodo,deleteATodo,getAllTodos,getOneTodo} = require('../Controllers/controller.todo')

router.post('/add', addNewTodo)
router.get('/getAll', getAllTodos)
router.get('/getOne/:id',getOneTodo)
router.put('/update/:id',updateOneTodo)
router.delete('/delete/:id',deleteATodo)

module.exports = router;