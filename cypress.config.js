const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wh43xv',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
