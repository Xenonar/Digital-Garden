const {join} = require('path');

const { createGlobPatternsForDependencies} = require('@nrwl/next/tailwind')

module.exports = {
  mode: 'jit',
  darkMode: false,
  theme:{
    extend:{},
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants:{
    extend:{},
  },
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    ...createGlobPatternsForDependencies(__dirname)
  ],
  plugins: [],
  presets:[require('../../tailwind-workspace-preset.js')]
}
