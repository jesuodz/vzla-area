const commandLineArgs = require('command-line-args');

const commandLineFunctions = () => {
  let optionDefinitions = [
    { name: "PORT", alias: "p", type: Number },
    { name: "NODE_ENV", alias: "n", type: String }
  ];

  return commandLineArgs(optionDefinitions);
}

module.exports = commandLineFunctions;
