const {join} = require('path');

const { createGlobPatternsForDependencies} = require('@nrwl/next/tailwind')

module.exports = {
  mode: 'jit',
  content: [
    "./**/**/*.tsx",
    "./pages/**/*.tsx",
    "./index.tsx"
  ],
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
  presets:[require('../../tailwind-workspace-preset.js')]
}
