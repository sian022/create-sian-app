#!/usr/bin/env node
require("colors");
const readLineSync = require("readline-sync");
const path = require("path");
const fse = require("fs-extra");

const NO_CHOICE_MADE = -1;
const CURR_DIR = process.cwd();
const templatesDir = path.join(__dirname, "template");
const templates = fse.readdirSync(templatesDir);

if (!templates.length) {
  console.log("no template to choose from , templates folder is empty");
  process.exit(0);
}

const index = readLineSync.keyInSelect(templates);

if (index === NO_CHOICE_MADE) {
  process.exit(0);
}

const projectName = readLineSync.question(
  "What is the name of your project? ",
  {
    limit: (input) => input.trim().length > 0,
    limitMessage: "The project has to have a name, try again",
  }
);

const confirmCreateDirectory = readLineSync.keyInYN(
  `You entered '${projectName}', create directory with this name?`
);

if (confirmCreateDirectory) {
  const template = templates[index];
  const source = path.join(templatesDir, template);
  const destination = path.join(CURR_DIR, projectName);

  // Function to filter out files/directories to exclude
  const filterFunc = (src, dest) => {
    const excludedDirs = [".node_modules", ".git", "node_modules"];
    return !excludedDirs.some((excludedDir) => src.includes(excludedDir));
  };

  fse
    .copy(source, destination, { filter: filterFunc })
    .then(() => console.log(`Successfully created ${destination}`.green))
    .catch((err) => console.error(err));
} else {
  console.log("Aborted creating a new template");
}
