import React, { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "64a4cb79febddb897853822d",
            "user": "64a46948654c33c74acf79a3",
            "title": "My Title 2",
            "description": "Please wake up early and eat breakfast",
            "tag": "personal routine",
            "date": "2023-07-05T01:46:33.993Z",
            "__v": 0
        },
        {
            "_id": "64a4cb79febddb897853822d",
            "user": "64a46948654c33c74acf79a3",
            "title": "My Title 2",
            "description": "Please wake up early and eat breakfast",
            "tag": "personal routine",
            "date": "2023-07-05T01:46:33.993Z",
            "__v": 0
        },
        {
            "_id": "64a4cb79febddb897853822d",
            "user": "64a46948654c33c74acf79a3",
            "title": "My Title 2",
            "description": "Please wake up early and eat breakfast",
            "tag": "personal routine",
            "date": "2023-07-05T01:46:33.993Z",
            "__v": 0
        },
        {
            "_id": "64a4cb79febddb897853822d",
            "user": "64a46948654c33c74acf79a3",
            "title": "My Title 2",
            "description": "Please wake up early and eat breakfast",
            "tag": "personal routine",
            "date": "2023-07-05T01:46:33.993Z",
            "__v": 0
        },
        {
            "_id": "64a4cb79febddb897853822d",
            "user": "64a46948654c33c74acf79a3",
            "title": "My Title 2",
            "description": "Please wake up early and eat breakfast",
            "tag": "personal routine",
            "date": "2023-07-05T01:46:33.993Z",
            "__v": 0
        },
        {
            "_id": "64a4cb79febddb897853822d",
            "user": "64a46948654c33c74acf79a3",
            "title": "My Title 2",
            "description": "Please wake up early and eat breakfast",
            "tag": "personal routine",
            "date": "2023-07-05T01:46:33.993Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;