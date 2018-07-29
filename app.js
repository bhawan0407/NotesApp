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
    notes.addNote(argv.title, argv.body);
}
else if(command === 'remove')
{
    notes.removeNote(argv.title);
}
else if(command === 'list')
{
    notes.getAll();
}
else if(command == 'read')
{
    notes.getNote(argv.title);
}
else 
{
    console.log("Command not recognised");
}
