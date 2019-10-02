const commandLineUsage = require('command-line-usage');

module.exports = function getUsage() {
  const sections = [
    {
      header: "Usage",
      content: "The first option is required."
    },
    {
      header: "Options",
      optionList: [
        {
          name: "Node environment",
          alias: "n",
          typeLabel: '{underline string}'
        },
        {
          name: "Port",
          alias: "p",
          typeLabel: '{underline number}'
        }
      ]
    }
  ]

  return commandLineUsage(sections);
}
