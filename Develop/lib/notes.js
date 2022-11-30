const fs = require('fs');
const path = require('path');

function addNote(body, notesArr) {
    const putNote = body
     fs.writeFileSync(
        path.join(__dirname, "./db/db.json"),
        JSON.stringify({ notes: notesArr }, null, 2)
      );
      return putNote;
}

module.exports = { addNote };