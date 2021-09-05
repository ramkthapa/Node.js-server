const mongoose = require('mongoose');

const todoSchema =  mongoose.Schema({
    title: { type: String},
    description: { type: String},
    dueDate: { type: String},
});

module.exports = mongoose.model('Blog', todoSchema);