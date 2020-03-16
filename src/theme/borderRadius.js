const { percents, pixelsToFifty } = require('../core/sizes');

module.exports = {
  ...percents,
  ...pixelsToFifty,

  'none': '0',
  'sm': '1rem',
  'default': '2rem',
  'md': '2.5rem',
  'lg': '4rem',
};
