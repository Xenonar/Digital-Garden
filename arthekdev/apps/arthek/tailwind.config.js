const {join} = require('path');

const { createGlobPatternsForDependencies} = require('@nrwl/next/tailwind')

module.exports = {
  darkMode: false,
  theme:{
    extend:{}
  },
  variants:{
    extend:{},
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    ...createGlobPatternsForDependencies(__dirname)
  ],
  plugins: [],
  presets:[require('../../tailwind-workspace-preset.js')]
}
