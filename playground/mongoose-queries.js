const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

var id = '59c354cc1354061d5a3d2892';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By ID ', todo);
// }).catch((e) => {
//     console.log(e);
// });

User.findById(id).then((user) => {
    if (!user) {
        return console.log('ID not found');
    }
    console.log('User by ID ', JSON.stringify(user, undefined, 2));
}).catch((e) => {
    console.log(e);
});