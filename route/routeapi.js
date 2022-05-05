const router = require("express").Router()

const uuid = require('uuid');

const fs = require('fs');

let notes = require('../db/db.json');

router.get ("/api/notes", (req,res) => {
  notes = JSON.parse(fs.readFileSync('./db/db.json'))
  res.json(notes)
})

router.post ("/api/notes", (req,res) => {
  const newNote = {
    id:uuid.v4(),
    title:req.body.title,
    text:req.body.text
  }
  notes.push(newNote)

  fs.writeFileSync('./db/db.json', JSON.stringify(notes),(err,data) => {
    if(err) throw err;
  })
  res.json(notes)
})

router.delete ("/api/notes/:id", (req,res) => {
 let adjustNote = []
 notes.forEach(element => {
   if (element.id != req.params.id){
     adjustNote.push(element)
   }
 });
  notes=adjustNote

  fs.writeFileSync('./db/db.json', JSON.stringify(notes),(err,data) => {
    if(err) throw err;
  })
  res.json(notes)
})

module.exports = router;