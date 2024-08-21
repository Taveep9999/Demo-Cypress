const { defineConfig } = require("cypress");
require('dotenv').config()
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  viewportWidth: 1600,
  viewportHeight: 900,
  e2e: {
    setupNodeEvents(on, config) {
      // เพิ่ม event listeners ที่นี่ถ้าจำเป็น
    },
    specPattern: 'cypress/e2e/**/*.cy.ts',
  },
});
