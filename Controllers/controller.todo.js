
const Todo = require('../Models/Todo')

const addNewTodo = async (req,res) => {
  try {
    const newTodoItem = req.body
    const todo = await Todo.create(newTodoItem)
     if(todo) {
         res.status(201).json({
        success: true,
        message: 'Todo item created successfully',
        data: todo
    })
     }
  }catch(e) {
     res.status(500).json({
        success: false,
        message: 'Failed to create todo item'
     })
  }
}

const updateOneTodo = async (req,res) => {
    
}

const deleteATodo = async (req,res) => {
    try {
       const currentTodoIdToDelete = req.params.id;
       const deletedTodoItem = await Todo.findByIdAndDelete(currentTodoIdToDelete);

       if(!deletedTodoItem) {
          res.status(404).json({
            sucess: false,
            message:"Do not find Todo item with currentId"
          })
       }

       res.status(201).json({
        sucess: true,
        message: 'Todo was deleted successfully',
        data: deletedTodoItem
       })


    }catch(e) {
       console.log(e)
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve todo items'
      })
    }
}

const getAllTodos = async (req,res) => {
    try {
      const allTodos = await Todo.find({})
      if(allTodos?.length > 0) {
          res.status(200).json({
            success: true,
            message: 'Todo items retrieved successfully',
            data: allTodos
          })
      }
    }catch(e) {
      console.log(e)
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve todo items'
      })
    }
}

const getOneTodo = async (req,res) => {
     try {
        const getTodoById = req.params.id;
        const currentTodo = await Todo.findById(getTodoById);
        if(currentTodo)  {
          res.status(201).json({
            sucess: true,
            message: 'Todo item retrieved successfully',
            data: currentTodo 
          })
        }
     }catch(e) {
      console.log(e)
      res.status(500).json({
        sucess: false,
        message: 'Failed to retrieve the todo item'
      })
     }
}


module.exports = {
    addNewTodo,
    updateOneTodo,
    deleteATodo,
    getAllTodos,
    getOneTodo
}