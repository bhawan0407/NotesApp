const fs = require('fs');

console.log('Starting notes.js');


var fetchNotes = () =>
{
    try
    {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }
    catch(e)
    {
        return [];
    }
}

var saveNotes = (notes) =>
{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) =>
{
    var notes = fetchNotes();

    var note = 
    {
        title, // equivalent to title : title in ES6
        body   // equivalent to body  : body  in ES6 
    };

    // check if there exists a note already with same title
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0)
    {
        notes.push(note);
        saveNotes(notes);
        return note;
    }   
};

var getAll = () =>
{
    console.log("Getting all notes");
}

var removeNote = (title) =>
{
    console.log("Removing note", title);
}

var getNote = (title) =>
{
    console.log("Getting note", title);
}


module.exports = 
{
    addNote,
    getAll,
    removeNote,
    getNote
};

