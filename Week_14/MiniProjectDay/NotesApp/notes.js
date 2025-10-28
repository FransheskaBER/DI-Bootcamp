// saves notes into a file

// import the file system module
import { log } from "console";
import fs from "fs";


// create a function that will add a new note
export function addNote(title, body){
    console.log("Adding a new note...");
    
    // 1. read notes and load all the existing notes (so we won't overwrite them when we save new note):
    const notes = loadNotes();

    // 2. check if note already exists
    const duplicate = notes.find(note => note.title === title);
    if (duplicate) {
        console.log("Note already exists");
        return;
    }
    // 3. add new note
    notes.push({ title, body });
    

    // 4. save updated notes back to file
    saveNotes(notes);
    console.log("New note added!");
}

export function listNotes(){
    const notes = loadNotes();
    console.log(`Fetching ${notes.length} notes...`);
    console.log(notes);
}

export function readNote(title){
    console.log("Fetching note...");
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if (!note){
        console.log("Note not found");
        return;
    }
    console.log(note);
}

export function removeNote(title){
    const notes = loadNotes();
    const noteIndex = notes.findIndex(note => note.title === title);
    if (noteIndex === -1){
        console.log("Note not found");
        return;
    }
    const removed = notes.splice(noteIndex, 1)[0]
    saveNotes(notes);
    console.log("Note removed: ", removed);
}



// HELPER FUNCTIONS:
// 1. read the notes in the file and check if file exists
function loadNotes(){
    try {
        const data = fs.readFileSync("notes.json", "utf-8");
        return JSON.parse(data);
    } catch (err){
        return []; // if file doens't exist yet, return an empty array
    }
}
// 2. save updated array
function saveNotes(notes){
    fs.writeFileSync("notes.json", JSON.stringify(notes));
}
