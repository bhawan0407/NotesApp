const fs = require('fs');

console.log('Starting notes.js');

var addNote = (title, body) =>
{
    //console.log("Adding note", title, body);

    notes = [];

    var note = 
    {
        title, // equivalent to title : title in ES6
        body   // equivalent to body  : body  in ES6 
    };

    console.log(note);

    // if file doesn't exist, an exception is thrown,
    // so handle it with try-catch 
    try
    {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    }
    catch (e)
    {
    }

    // check if there exists a note already with same title
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0)
    {
        console.log("Adding note", title, body);
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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

