import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    ignores: ["**/*.test.js"], // Ignore les fichiers de test (fichiers .test.js)
    files: ["**/*.js"], // Cible tous les fichiers JS
    languageOptions: {
      sourceType: "commonjs", // Utilisation de CommonJS (modularité en Node.js)
    },
  },
  {
    languageOptions: {
      globals: globals.node, // Utilisation des variables globales pour Node.js
    },
  },
  pluginJs.configs.recommended, // Utilise la configuration de règles recommandées par ESLint
  {
    rules: {
      "no-unused-vars": "error",  // Erreur si une variable est déclarée mais jamais utilisée
      "no-undef": "error",        // Erreur si une variable est utilisée avant d'être déclarée
      "no-console": "error",      // Erreur si console.log est trouvé dans le code
    },
  },
];
