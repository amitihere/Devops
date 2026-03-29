const fs = require("fs");

const files = fs.readdirSync("./client/src");

let errorFound = false;

files.forEach((file) => {
  if (file.endsWith(".js")) {
    const content = fs.readFileSync(`./client/src/${file}`, "utf8");

    if (
      content.includes('= ""') ||
      content.includes("= ''") ||
      content.includes("= null") ||
      content.includes("= undefined")
    ) {
      console.log(`Error in file: ${file}`);
      errorFound = true;
    }
  }
});

if (errorFound) {
  console.log("Empty variable found. Failing workflow.");
  process.exit(1);
} else {
  console.log("All good!");
}