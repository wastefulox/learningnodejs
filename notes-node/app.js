console.log('Starting app.js.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


console.log(notes.add(1,-8));

// var res = notes.addNote();
// console.log(res);

// var user = os.userInfo();
// // console.log(user.username);
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! ? You are ${notes.age}`, function (err){
//   if (err) {
//     console.log('unable to write file');
//   }
// });
