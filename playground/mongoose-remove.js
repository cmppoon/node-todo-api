const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Tod

Todo.findByIdAndRemove('59c53eeef882e60ad135f45f').then((todo) => {
    console.log(todo);
});