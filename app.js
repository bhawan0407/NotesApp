const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var titleOptions = 
{
    desribe : 'Title of note',
    demand  : true,
    alias   : 't'
};

var bodyOptions = 
{
    describe : 'Body of note',
    demand   : true,
    alias    : 'b'
};

const argv  = yargs
            .command('add', 'Add a note', 
            {
                title : titleOptions,
                body  : bodyOptions 
            })
            .command('remove', 'Remove a note',
            {
                title : titleOptions
            })
            .command("read", 'Read a note',
            {
                title : titleOptions 
            })
            .command("list", 'List all notes')
            .help()
            .argv;

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
    var allNotes = notes.getAll();
 
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
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
