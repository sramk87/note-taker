const router = require('express').Router();
const { addNote } = require('../../Develop/lib/notes');
const { notes } = require('../../Develop/db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
  });

  router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    if (!addNote(req.body)) {
      res.status(400);
    } else {
      const newNote = addNote(req.body, notes);
      res.json(newNote);
    }
  });

  module.exports = router;