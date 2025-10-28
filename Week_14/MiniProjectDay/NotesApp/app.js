// handle the user commands

// yargs is the translator of human commands and the app, so your app will understadn what you want in your commands
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { addNote, listNotes, readNote, removeNote } from "./notes.js";

const cli = yargs(hideBin(process.argv));

// create a new command called "add"
cli
    .command({
        command: "add",
        describe: "Add a new note",
        builder: {
            // demandOption: true, // make "title" required (user must type it)
            title: { describe: "Note title", demandOption: true, type: "string" },
            body: { describe: "Note body", demandOption: true, type: "string" },
        },
        handler(argv){
            // this function runs when the user types "note app add ..."
            addNote(argv.title, argv.body);
        },
    })
    .command({
        command: "list",
        describe: "List all notes",
        handler(){
            listNotes();
        },
    })
    .command({
        command: "read",
        describe: "Read a specific note",
        builder: {
            title: { describe: "Note title", demandOption: true, type: "string" },
        },
        handler(argv){
            readNote(argv.title);
        },
    })
    .command({
        command: "remove",
        describe: "Remove a specific note",
        builder: {
            title: { describe: "Note title", demandOption: true, type: "string" },
        },
        handler(argv){
            removeNote(argv.title);
        },
    })
    .strict() // tells yargs to only accept commands I defined here
    .fail((msg, err, yargs) => {
        console.log("Command not defined. Go to app.js and define it.");
    })
    .parse(); // make yargs proccess the command line input