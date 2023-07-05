import React, { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    // Add a Note
    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhNDY5NDg2NTRjMzNjNzRhY2Y3OWEzIn0sImlhdCI6MTY4ODQ5NjQ1Nn0.p-ue0hirocK-wMOWhc_Ba-uiy-j-GazRnHg23l7bUOE"
            },
            body: JSON.stringify({ title, description, tag })
        });

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

    // Get all Notes
    const getNotes = async (title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhNDY5NDg2NTRjMzNjNzRhY2Y3OWEzIn0sImlhdCI6MTY4ODQ5NjQ1Nn0.p-ue0hirocK-wMOWhc_Ba-uiy-j-GazRnHg23l7bUOE"
            },
        });
        const json = await response.json()
        setNotes(json)
    }

    // Delete a Note
    const deleteNote = (id) => {
        // TODO: API Call
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // TODO: API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhNDY5NDg2NTRjMzNjNzRhY2Y3OWEzIn0sImlhdCI6MTY4ODQ5NjQ1Nn0.p-ue0hirocK-wMOWhc_Ba-uiy-j-GazRnHg23l7bUOE"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();

        // Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;

            }
        }
    }
    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;