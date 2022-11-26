const {Schema, model, ObjectId} = require("mongoose")

const Teacher = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    avatar: {type: String},
    tickets: [{type: ObjectId, ref: 'Ticket'}],
})

module.exports = model('Teacher', Teacher)