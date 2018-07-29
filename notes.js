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
    var notes = fetchNotes();

    // filteredNotes contain all the notes whose title doesn't match with 
    // title passed as argument
    var filteredNotes = notes.filter((note) => note.title !== title);

    saveNotes(filteredNotes);

    return (filteredNotes.length != notes.length);
}

var getNote = (title) =>
{
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
}

var logNote = (note) =>
{
    console.log('----');
    console.log("Title " + note.title);
    console.log("Body  " + note.body);
}


module.exports = 
{
    addNote,
    getAll,
    removeNote,
    getNote,
    logNote
};

