import React, { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "64a4cb79febddb8e97853822d",
            "user": "64a46948654c33c74acf79a3",
            "title": "My Title 2",
            "description": "Please wake up early and eat breakfast",
            "tag": "personal routine",
            "date": "2023-07-05T01:46:33.993Z",
            "__v": 0
        },
        {
            "_id": "64a4cb79feebddb897853822d",
            "user": "64a46948654c33c74acf79a3",
            "title": "My Title 2",
            "description": "Please wake up early and eat breakfast",
            "tag": "personal routine",
            "date": "2023-07-05T01:46:33.993Z",
            "__v": 0
        },
        {
            "_id": "64a4cb79febddb897853e822d",
            "user": "64a46948654c33c74acf79a3",
            "title": "My Title 2",
            "description": "Please wake up early and eat breakfast",
            "tag": "personal routine",
            "date": "2023-07-05T01:46:33.993Z",
            "__v": 0
        },
        {
            "_id": "64a4cb79febdedb897853822d",
            "user": "64a46948654c33c74acf79a3",
            "title": "My Title 2",
            "description": "Please wake up early and eat breakfast",
            "tag": "personal routine",
            "date": "2023-07-05T01:46:33.993Z",
            "__v": 0
        },
        {
            "_id": "64ea4cb79febddb897853822d",
            "user": "64a46948654c33c74acf79a3",
            "title": "My Title 2",
            "description": "Please wake up early and eat breakfast",
            "tag": "personal routine",
            "date": "2023-07-05T01:46:33.993Z",
            "__v": 0
        },
        {
            "_id": "64a4cb79efebddb897853822d",
            "user": "64a46948654c33c74acf79a3",
            "title": "My Title 2",
            "description": "Please wake up early and eat breakfast",
            "tag": "personal routine",
            "date": "2023-07-05T01:46:33.993Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)

    // Add a Note
    const addNote = (title, description, tag) => {
        // TODO: API Call
        console.log("Adding a new note")
        const note = {
            "_id": "64a4cb79efebddb897831312538222d",
            "user": "64a46948654c33c74acf79a3e",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-07-05T01:46:33.993Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }
    // Delete a Note
    const deleteNote = (id) => {
        // TODO: API Call
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note)=>{ return note._id!==id})
        setNotes(newNotes)
    }
    // Edit a Note
    const editNote = (id, title, description, tag) => {

    }
    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;