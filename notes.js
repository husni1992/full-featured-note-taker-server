const fs = require("fs");
const chalk = require("chalk");

const STORAGE_PATH = "notes.json";

const addNote = (title, body) => {
  console.log("Adding new note");

  const notes = loadNotes();

  if (!duplicateExist(title, notes)) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);

    console.log(chalk.green.bold(`Success: Added new note '${title}'`));

    return;
  }

  console.log(chalk.red.bold("Error: Title cannot be duplicated"));
};

const removeNote = (title) => {
  console.log(`Removing note with title '${title}'`);

  const notes = loadNotes();

  // method1: find index and remove from notes array, and save it
  // const indexOfItem = notes.findIndex((item) => item.title === title);
  // notes.splice(indexOfItem, 1);
  // saveNotes(notes);

  // method2: filter only items except given one and save (more easier)
  const notesToKeep = notes.filter((item) => item.title !== title);

  if (notes.length === notesToKeep.length) {
    console.log(chalk.red.inverse("Note not found"));
    return;
  }

  console.log(chalk.green.inverse("Note removed!"));

  saveNotes(notesToKeep);
};

const duplicateExist = (title, notes) => {
  return !!notes.find((item) => item.title === title);
};

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync(STORAGE_PATH, dataJson);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync(STORAGE_PATH);
    const dataJson = dataBuffer.toString();

    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

const listNotes = () => {
  const notes = loadNotes();

  notes.forEach((note) =>
    console.log(`${chalk.bold(note.title)}  ${chalk.yellow(note.body)}`)
  );
};

const readNote = (title) => {
  const notes = loadNotes();

  debugger;

  const foundNote = notes.find((item) => item.title === title);

  if (!foundNote) {
    console.log(chalk.red.inverse("Cannot find note"));
    return;
  }

  console.log(
    `${chalk.bold(foundNote.title)}  ${chalk.yellow(foundNote.body)}`
  );
};

module.exports = {
  listNotes,
  addNote,
  removeNote,
  readNote,
};
