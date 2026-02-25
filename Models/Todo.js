const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

module.exports = mongoose.model('Todo', TodoSchema);