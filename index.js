const BigNumber = require('bignumber.js');
const plugin = require('tailwindcss/plugin');

const colors = {
  'black': '#000000',
  'blue': '#7d78d1',
  'green': '#2db400',
  'grey': '#b7b7b7',
  'pink': '#f40a50',
  'red': '#ff0000',
  'white': '#ffffff',

  'grey-10': '#0a0a0a',
  'grey-51': '#333333',
  'grey-115': '#737373',
  'grey-204': '#cccccc',
  'grey-230': '#e6e6e6',
  'grey-243': '#f3f3f3',
  'grey-246': '#f6f6f6',

  'label-blue': '#305cee',
  'label-cyan': '#1ec0ff',
  'label-gradient': 'linear-gradient(to right, #f10096 0%, #21d7ff 100%)',
  'label-green': '#2db400',
  'label-pink': '#fc02a7',
  'label-purple': '#9080dc',
  'label-red': '#ff0053',
  'label-teal': '#79f2c3',
  'label-yellow': '#f8e71c',
  'label-yellow-alt': '#ffcd1d',
};

let i = 1;
const percents = {};
const pixelsByOne = {};
const pixelsByTen = {};
const pixelsToFifty = {};
const rems = {};
const vws = {};

for(i; i <= 20; i++) {
  const px = `${i}px`;
  const px10 = `${i}0px`;
  const vw = `${i}vw`;

  percents[`${i}pc`] = `${i}%`;
  pixelsByOne[px] = px;
  pixelsByTen[px10] = px10;
  pixelsToFifty[px] = px;
  rems[i] = `${BigNumber(i).dividedBy(4).toString()}rem`;
  vws[vw] = vw;
}

for (i; i <= 50; i++) {
  const px = `${i}px`;
  const px10 = `${i}0px`;

  percents[`${i}pc`] = `${i}%`;
  pixelsByOne[px] = px;
  pixelsByTen[px10] = px10;
  pixelsToFifty[px] = px;
  rems[i] = `${BigNumber(i).dividedBy(4).toString()}rem`;
}

for (i; i <= 100; i++) {
  const px = `${i}px`;
  const px10 = `${i}0px`;

  percents[`${i}pc`] = `${i}%`;
  pixelsByOne[px] = px;
  pixelsByTen[px10] = px10;
  rems[i] = `${BigNumber(i).dividedBy(4).toString()}rem`;
}

for (i; i <= 128; i++) {
  const px10 = `${i}0px`;

  pixelsByTen[px10] = px10;
  rems[i] = `${BigNumber(i).dividedBy(4).toString()}rem`;
}

for (i; i <= 240; i++) {
  rems[i] = `${BigNumber(i).dividedBy(4).toString()}rem`;
}

module.exports = plugin(({ addBase, addComponents, addUtilities, theme }) => {
  const roboto = {
    /* cyrillic-ext */
    '@font-face': {
      'font-family': 'Roboto Mono',
      'font-style': 'normal',
      'font-weight': '300',
      'font-display': 'swap',
      'src': 'local(\'Roboto Mono Light\'), local(\'RobotoMono-Light\'), url(https://fonts.gstatic.com/s/robotomono/v7/L0xkDF4xlVMF-BfR8bXMIjDgiWq8f7-7Ag.woff2) format(\'woff2\')',
      'unicode-range': 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    },
    /* cyrillic */
    '@font-face': {
      'font-family': 'Roboto Mono',
      'font-style': 'normal',
      'font-weight': '300',
      'font-display': 'swap',
      'src': 'local(\'Roboto Mono Light\'), local(\'RobotoMono-Light\'), url(https://fonts.gstatic.com/s/robotomono/v7/L0xkDF4xlVMF-BfR8bXMIjDgiWq1f7-7Ag.woff2) format(\'woff2\')',
      'unicode-range': 'U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    },
    /* greek-ext */
    '@font-face': {
      'font-family': 'Roboto Mono',
      'font-style': 'normal',
      'font-weight': '300',
      'font-display': 'swap',
      'src': 'local(\'Roboto Mono Light\'), local(\'RobotoMono-Light\'), url(https://fonts.gstatic.com/s/robotomono/v7/L0xkDF4xlVMF-BfR8bXMIjDgiWq9f7-7Ag.woff2) format(\'woff2\')',
      'unicode-range': 'U+1F00-1FFF',
    },
    /* greek */
    '@font-face': {
      'font-family': 'Roboto Mono',
      'font-style': 'normal',
      'font-weight': '300',
      'font-display': 'swap',
      'src': 'local(\'Roboto Mono Light\'), local(\'RobotoMono-Light\'), url(https://fonts.gstatic.com/s/robotomono/v7/L0xkDF4xlVMF-BfR8bXMIjDgiWqyf7-7Ag.woff2) format(\'woff2\')',
      'unicode-range': 'U+0370-03FF',
    },
    /* vietnamese */
    '@font-face': {
      'font-family': 'Roboto Mono',
      'font-style': 'normal',
      'font-weight': '300',
      'font-display': 'swap',
      'src': 'local(\'Roboto Mono Light\'), local(\'RobotoMono-Light\'), url(https://fonts.gstatic.com/s/robotomono/v7/L0xkDF4xlVMF-BfR8bXMIjDgiWq-f7-7Ag.woff2) format(\'woff2\')',
      'unicode-range': 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    },
    /* latin-ext */
    '@font-face': {
      'font-family': 'Roboto Mono',
      'font-style': 'normal',
      'font-weight': '300',
      'font-display': 'swap',
      'src': 'local(\'Roboto Mono Light\'), local(\'RobotoMono-Light\'), url(https://fonts.gstatic.com/s/robotomono/v7/L0xkDF4xlVMF-BfR8bXMIjDgiWq_f7-7Ag.woff2) format(\'woff2\')',
      'unicode-range': 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    },
    /* latin */
    '@font-face': {
      'font-family': 'Roboto Mono',
      'font-style': 'normal',
      'font-weight': '300',
      'font-display': 'swap',
      'src': 'local(\'Roboto Mono Light\'), local(\'RobotoMono-Light\'), url(https://fonts.gstatic.com/s/robotomono/v7/L0xkDF4xlVMF-BfR8bXMIjDgiWqxf78.woff2) format(\'woff2\')',
      'unicode-range': 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
  };

  const rubik = {
    /* cyrillic */
    '@font-face': {
      'font-family': 'Rubik',
      'font-style': 'normal',
      'font-weight': '300',
      'font-display': 'swap',
      'src': 'local(\'Rubik Light\'), local(\'Rubik-Light\'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7Fqj2mZ8WDm7Q.woff2) format(\'woff2\')',
      'unicode-range': 'U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    },
    /* hebrew */
    '@font-face': {
      'font-family': 'Rubik',
      'font-style': 'normal',
      'font-weight': '300',
      'font-display': 'swap',
      'src': 'local(\'Rubik Light\'), local(\'Rubik-Light\'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7Fqj2mf8WDm7Q.woff2) format(\'woff2\')',
      'unicode-range': 'U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F',
    },
    /* latin-ext */
    '@font-face': {
      'font-family': 'Rubik',
      'font-style': 'normal',
      'font-weight': '300',
      'font-display': 'swap',
      'src': 'local(\'Rubik Light\'), local(\'Rubik-Light\'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7Fqj2mT8WDm7Q.woff2) format(\'woff2\')',
      'unicode-range': 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    },
    /* latin */
    '@font-face': {
      'font-family': 'Rubik',
      'font-style': 'normal',
      'font-weight': '300',
      'font-display': 'swap',
      'src': 'local(\'Rubik Light\'), local(\'Rubik-Light\'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7Fqj2md8WA.woff2) format(\'woff2\')',
      'unicode-range': 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
    /* cyrillic */
    '@font-face': {
      'font-family': 'Rubik',
      'font-style': 'normal',
      'font-weight': '500',
      'font-display': 'swap',
      'src': 'local(\'Rubik Medium\'), local(\'Rubik-Medium\'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7EyjmmZ8WDm7Q.woff2) format(\'woff2\')',
      'unicode-range': 'U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    },
    /* hebrew */
    '@font-face': {
      'font-family': 'Rubik',
      'font-style': 'normal',
      'font-weight': '500',
      'font-display': 'swap',
      'src': 'local(\'Rubik Medium\'), local(\'Rubik-Medium\'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7Eyjmmf8WDm7Q.woff2) format(\'woff2\')',
      'unicode-range': 'U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F',
    },
    /* latin-ext */
    '@font-face': {
      'font-family': 'Rubik',
      'font-style': 'normal',
      'font-weight': '500',
      'font-display': 'swap',
      'src': 'local(\'Rubik Medium\'), local(\'Rubik-Medium\'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7EyjmmT8WDm7Q.woff2) format(\'woff2\')',
      'unicode-range': 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    },
    /* latin */
    '@font-face': {
      'font-family': 'Rubik',
      'font-style': 'normal',
      'font-weight': '500',
      'font-display': 'swap',
      'src': 'local(\'Rubik Medium\'), local(\'Rubik-Medium\'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7Eyjmmd8WA.woff2) format(\'woff2\')',
      'unicode-range': 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
    /* cyrillic */
    '@font-face': {
      'font-family': 'Rubik',
      'font-style': 'normal',
      'font-weight': '700',
      'font-display': 'swap',
      'src': 'local(\'Rubik Bold\'), local(\'Rubik-Bold\'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7F6iGmZ8WDm7Q.woff2) format(\'woff2\')',
      'unicode-range': 'U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    },
    /* hebrew */
    '@font-face': {
      'font-family': 'Rubik',
      'font-style': 'normal',
      'font-weight': '700',
      'font-display': 'swap',
      'src': 'local(\'Rubik Bold\'), local(\'Rubik-Bold\'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7F6iGmf8WDm7Q.woff2) format(\'woff2\')',
      'unicode-range': 'U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F',
    },
    /* latin-ext */
    '@font-face': {
      'font-family': 'Rubik',
      'font-style': 'normal',
      'font-weight': '700',
      'font-display': 'swap',
      'src': 'local(\'Rubik Bold\'), local(\'Rubik-Bold\'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7F6iGmT8WDm7Q.woff2) format(\'woff2\')',
      'unicode-range': 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    },
    /* latin */
    '@font-face': {
      'font-family': 'Rubik',
      'font-style': 'normal',
      'font-weight': '700',
      'font-display': 'swap',
      'src': 'local(\'Rubik Bold\'), local(\'Rubik-Bold\'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7F6iGmd8WA.woff2) format(\'woff2\')',
      'unicode-range': 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
  };

  const html = {
    '-webkit-overflow-scrolling': 'touch',
    'background-color': theme('colors.white'),
    'font-family': theme('fontFamily.primary'),
    'margin': '0',
    'scroll-behavior': 'smooth',
  };

  addBase(roboto);
  addBase(rubik);

  addBase({
    'body': html,
    'html': html,
  });

  addComponents({
    '.btn': {
      'background': 'linear-gradient(-60deg, #cb1a8f, #fc02a7)',
      'border-radius': '5px',
      'border-style': 'none',
      'color': theme('colors.white'),
      'font-family': theme('fontFamily.primary'),
      'font-weight': theme('fontWeight.bold'),
      'margin-bottom': '20px',
      'margin-top': '10px',
      'min-width': '150px',
      'padding': '20px',
      'text-align': 'center',
      'transition-duration': '0.3s',
      'transition-property': 'background-color, color',

      '&:disabled': {
        'background': `${theme('colors.grey')} !important`,
        'pointer-events': 'none',
        'transition': 'none !important',
      },
      '&:hover': {
        'color': theme('colors.white'),
        'cursor': theme('cursor.pointer'),
        'opacity': theme('opacity.80'),
      },
      '&:focus': {
        'outline': 'none',
      },
      '&.modal': {
        'background-size': '100%',
        'margin-top': '30px',
      },
    },
  });

  addUtilities({
    '.content': {
      'align-items': 'center',
      'display': 'flex',
      'margin': 'auto',
      'max-width': '1280px',
      'overflow': 'hidden',
      'padding-bottom': '20px',
      'padding-top': '20px',
      'width': '96%',
    },
    '.pointer': { cursor: theme('cursor.pointer') },
  });
}, {
  theme: {
    backgroundColor: { ...colors },
    borderRadius: {
      ...percents,
      ...pixelsToFifty,
      'none': '0',
      'sm': '1rem',
      'default': '2rem',
      'md': '2.5rem',
      'lg': '4rem',
    },
    colors: { ...colors },
    extend: {
      backgroundSize: { ...percents },
      borderWidth: {
        'half': '0.5px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
      },
      inset: { '1/2': '50%' },
      lineHeight: { ...rems },
      minHeight: {
        ...percents,
        ...pixelsByOne,
        ...pixelsByTen,
        ...rems,
      },
      minWidth: {
        ...percents,
        ...pixelsByOne,
        ...pixelsByTen,
        ...rems,
      },
      maxHeight: {
        ...percents,
        ...pixelsByOne,
        ...pixelsByTen,
        ...rems,
      },
      maxWidth: {
        ...percents,
        ...pixelsByOne,
        ...pixelsByTen,
        ...rems,
      },
      spacing: {
        ...percents,
        ...pixelsByOne,
        ...pixelsByTen,
        ...rems,
      },
    },
    fontFamily: {
      'primary': 'Rubik, sans-serif',
      'secondary': 'Roboto, monospace',
    },
    fontSize: {
      xxs: '0.8rem',
      xs: '0.83rem',
      sm: '0.9rem',
      md: '1rem',
      base: '1.1rem',
      lg: '1.5rem',
      xl: '2.3rem',
      xxl: '4rem',
      xxxl: '6rem',
      xxxxl: '10rem',

      'm-xs': '0.5rem',
      'm-sm': '0.6rem',
      'm-lg': '1.3rem',
      'm-xl': '2rem',
      'm-xxl': '5rem',
      'm-xxxl': '7rem',
    },
    fontWeight: {
      thin: '100',
      normal: '300',
      bold: '500',
      bolder: '700',
    },
    opacity: {
      '0': '0',
      '10': '.1',
      '20': '.2',
      '30': '.3',
      '40': '.4',
      '50': '.5',
      '60': '.6',
      '70': '.7',
      '80': '.8',
      '90': '.9',
      '100': '1',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '960px',
      'xl': '1200px',
      'xxl': '1600px',
    },
  },
});
