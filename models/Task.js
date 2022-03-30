const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be morethan 20 charecters']
    },
    completed: {
        type: Boolean,
        default: false
    }
});



module.exports = mongoose.model('Task', TaskSchema)