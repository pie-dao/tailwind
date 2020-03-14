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

module.exports = plugin(() => {}, {
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
      'primary': ['Rubik', 'sans-serif'],
      'secondary': ['Roboto', 'monospace'],
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
