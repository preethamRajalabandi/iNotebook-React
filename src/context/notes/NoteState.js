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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhNTkxMTU4YmYwNGZmNTYxYjE4NDdhIn0sImlhdCI6MTY4ODU3MjE4MX0.j1IAALSZa4F06GmMipY1l3ADKHrlfr9YquAOE9ypLUg"
            },
            body: JSON.stringify({ title, description, tag })
        });

        console.log("Adding a new note")
        const note = {
            "title": title,
            "description": description,
            "tag": tag,
        }
        setNotes(notes.concat(note))
    }

    // Get all Notes
    const getNotes = async () => {
        // API Call 
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhNTkxMTU4YmYwNGZmNTYxYjE4NDdhIn0sImlhdCI6MTY4ODU3MjE4MX0.j1IAALSZa4F06GmMipY1l3ADKHrlfr9YquAOE9ypLUg"
          }
        });
        const json = await response.json()
        console.log(json)
        setNotes(json)
      }

    // Delete a Note
    const deleteNote = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhNTkxMTU4YmYwNGZmNTYxYjE4NDdhIn0sImlhdCI6MTY4ODU3MjE4MX0.j1IAALSZa4F06GmMipY1l3ADKHrlfr9YquAOE9ypLUg"
            },
        });
        const json = await response.json()
        console.log(json)

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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhNTkxMTU4YmYwNGZmNTYxYjE4NDdhIn0sImlhdCI6MTY4ODU3MjE4MX0.j1IAALSZa4F06GmMipY1l3ADKHrlfr9YquAOE9ypLUg"
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