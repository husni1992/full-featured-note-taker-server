const notesHandler = require("./notes");

const yargs = require("yargs");
const chalk = require("chalk");
// const validator = require("validator");

// const { first } = require("./utils");
// const { getNotes } = require("./notes");

// console.log("foo", first);
// console.log("notes", getNotes());

// console.log(validator.isURL("www//.fool.com"));

// console.log(chalk.underline.blue.bold.dim.italic("Success yah!!!"));

// console.log(process.argv)
// const command = process.argv[2];

// add, remove, read, list

yargs.version("1.0");

yargs.command({
  command: "add",
  describe: "This will add a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notesHandler.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "This will remove a note by title",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notesHandler.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "This will list notes",
  handler() {
    notesHandler.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "This will read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notesHandler.readNote(argv.title);
  },
});

// console.log(process.argv);
// console.log(yargs.argv);
yargs.parse();
