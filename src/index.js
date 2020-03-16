const plugin = require('tailwindcss/plugin');

// Core

const colors = require('./core/colors');

// Theme

const backgroundColor = require('./theme/backgroundColor');
const backgroundSize = require('./theme/backgroundSize');
const borderRadius = require('./theme/borderRadius');
const borderWidth = require('./theme/borderWidth');
const fontFamily = require('./theme/fontFamily');
const fontSize = require('./theme/fontSize');
const fontWeight = require('./theme/fontWeight');
const inset = require('./theme/inset');
const lineHeight = require('./theme/lineHeight');
const maxHeight = require('./theme/maxHeight');
const maxWidth = require('./theme/maxWidth');
const minHeight = require('./theme/minHeight');
const minWidth = require('./theme/minWidth');
const opacity = require('./theme/opacity');
const screens = require('./theme/screens');
const spacing = require('./theme/spacing');

// Components

const btn = require('./components/btn');

// Utilities

const content = require('./utilities/content');
const pointer = require('./utilities/pointer');

// Export

module.exports = plugin(({
  addBase,
  addComponents,
  addUtilities,
  theme,
}) => {
  addBase({
    'html, body': {
      '-webkit-overflow-scrolling': 'touch',
      'background-color': theme('colors.white'),
      'font-family': theme('fontFamily.primary'),
      'margin': '0',
      'scroll-behavior': 'smooth',
    },
  });

  addComponents({
    ...btn,
  });

  addUtilities({
    ...content,
    ...pointer,
  });
}, {
  theme: {
    backgroundColor,
    borderRadius,
    colors,
    extend: {
      backgroundSize,
      borderWidth,
      inset,
      lineHeight,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      spacing,
    },
    fontFamily,
    fontSize,
    fontWeight,
    opacity,
    screens,
  },
});
