const opacity = require('../theme/opacity');

const { bold } = require('../theme/fontWeight');
const { grey, white } = require('../core/colors');
const { primary } = require('../theme/fontFamily');

module.exports = {
  '.btn': {
    'background': 'linear-gradient(-60deg, #cb1a8f, #fc02a7)',
    'border-radius': '5px',
    'border-style': 'none',
    'color': white,
    'font-family': primary,
    'font-weight': bold,
    'margin-bottom': '20px',
    'margin-top': '10px',
    'min-width': '150px',
    'padding': '20px',
    'text-align': 'center',
    'transition-duration': '0.3s',
    'transition-property': 'background-color, color',

    '&:disabled': {
      'background': `${grey} !important`,
      'pointer-events': 'none',
      'transition': 'none !important',
    },
    '&:hover': {
      'color': white,
      'cursor': 'pointer',
      'opacity': opacity[80],
    },
    '&:focus': {
      'outline': 'none',
    },
    '&.modal': {
      'background-size': '100%',
      'margin-top': '30px',
    },
  },
};
