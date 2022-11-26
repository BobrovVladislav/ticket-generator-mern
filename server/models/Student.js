const {Schema, model, ObjectId} = require("mongoose")

const Student = new Schema({
    faculty: {type: String, required: true},
    group: {type: String, required: true},
    gradeBook: {type: String, unique: true, required: true},
    avatar: {type: String},
    tickets: [{type: ObjectId, ref: 'Ticket'}],
})

module.exports = model('Student', Student)