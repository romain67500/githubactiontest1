const globals = require('globals');
const pluginJs = require('@eslint/js');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",  // Utilise "module" si tu travailles avec des modules ES
    },
  },
  {
    languageOptions: {
      globals: globals.browser,  // Retire cette ligne si tu n'as pas besoin des variables globales du navigateur
    },
  },
  pluginJs.configs.recommended, // Règles ESLint recommandées
];
