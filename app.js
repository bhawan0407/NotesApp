console.log('Starting app!');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv  = yargs.argv;

console.log(argv);

var command = argv._[0];

if(command === 'add')
{
    var note = notes.addNote(argv.title, argv.body);
    
    // undefined is treated as falsy value in JavaScript
    if(note)
    {
        console.log("Note added");
        notes.logNote(note);
    }
    else 
    {
        console.log("Note title taken");
    }

}
else if(command === 'remove')
{
    var noteRemoved = notes.removeNote(argv.title);

    var message = noteRemoved ? "Note removed" : "Note not found";

    console.log(message);
}
else if(command === 'list')
{
    notes.getAll();
}
else if(command == 'read')
{
    var note = notes.getNote(argv.title);

    if(note)
    {
        console.log("Note found");
        notes.logNote(note);
    }
    else 
    {
        console.log("Note not found");
    }
}
else 
{
    console.log("Command not recognised");
}
