#!/usr/bin/env node
require("colors");
const readLineSync = require("readline-sync");
const path = require("path");
const fse = require("fs-extra");

const NO_CHOICE_MADE = -1;
const CURR_DIR = process.cwd();
const CURR_DIR_BASENAME = path.basename(CURR_DIR);

const templatesDir = path.join(__dirname, "template");
const templates = fse.readdirSync(templatesDir);

if (!templates.length) {
  console.log("no template to choose from, templates folder is empty");
  process.exit(0);
}

const index = readLineSync.keyInSelect(templates);

if (index === NO_CHOICE_MADE) {
  process.exit(0);
}

const chosenTemplate = templates[index];
const templateDir = path.join(templatesDir, chosenTemplate);

// Read the content of package.json
const packageJsonPath = path.join(templateDir, "package.json");
const packageJsonContent = fse.readFileSync(packageJsonPath, "utf8");

// Parse the JSON content
const packageJson = JSON.parse(packageJsonContent);

// Get the project name from the user
const projectName = readLineSync.question(
  "What is the name of your project? ",
  {
    limit: (input) => input.trim().length > 0,
    limitMessage: "The project has to have a name, try again",
  }
);

// Update the name property in package.json
packageJson.name = projectName === "." ? CURR_DIR_BASENAME : projectName;

// Write the modified object back to package.json
fse.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

const confirmCreateDirectory =
  projectName === "."
    ? readLineSync.keyInYN(
        `Create project in current directory '${CURR_DIR_BASENAME}'?`
      )
    : readLineSync.keyInYN(
        `You entered '${projectName}', create directory with this name?`
      );

if (confirmCreateDirectory) {
  const destination = path.join(CURR_DIR, projectName);

  // Function to filter out files/directories to exclude
  const filterFunc = (src, dest) => {
    const excludedDirs = [".node_modules", ".git", "node_modules"];
    return !excludedDirs.some((excludedDir) => src.includes(excludedDir));
  };

  fse
    .copy(templateDir, destination, { filter: filterFunc })
    .then(() => console.log(`Successfully created ${destination}`.green))
    .catch((err) => console.error(err));
} else {
  console.log("Aborted creating a new template");
}
