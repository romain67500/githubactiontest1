const globals = require("globals");
const pluginJs = require("@eslint/js");

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {
    ignores: ["**/*.test.js"], // Ignore les fichiers de tests
    files: ["**/*.js"], // Cible tous les fichiers JS
    languageOptions: { sourceType: "commonjs" }, // Utilisation de CommonJS
  },
  {
    languageOptions: { globals: globals.node }, // Utilise les variables globales de Node.js
  },
  pluginJs.configs.recommended, // Utilise les règles recommandées d'ESLint
  {
    rules: {
      "no-unused-vars": "error", // Erreur pour les variables inutilisées
      "no-undef": "error", // Erreur pour les variables non définies
      "no-console": "error", // Erreur pour l'utilisation de console.log
    },
  },
];
