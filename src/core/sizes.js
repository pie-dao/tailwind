const BigNumber = require('bignumber.js');

let i = 1;

const sizes = {
  percents: {},
  pixelsByOne: {},
  pixelsByTen: {},
  pixelsToFifty: {},
  rems: {},
  vws: {},
};

for (i; i <= 20; i += 1) {
  const px = `${i}px`;
  const px10 = `${i}0px`;
  const vw = `${i}vw`;

  sizes.percents[`${i}pc`] = `${i}%`;
  sizes.pixelsByOne[px] = px;
  sizes.pixelsByTen[px10] = px10;
  sizes.pixelsToFifty[px] = px;
  sizes.rems[i] = `${BigNumber(i).dividedBy(4).toString()}rem`;
  sizes.vws[vw] = vw;
}

for (i; i <= 50; i += 1) {
  const px = `${i}px`;
  const px10 = `${i}0px`;

  sizes.percents[`${i}pc`] = `${i}%`;
  sizes.pixelsByOne[px] = px;
  sizes.pixelsByTen[px10] = px10;
  sizes.pixelsToFifty[px] = px;
  sizes.rems[i] = `${BigNumber(i).dividedBy(4).toString()}rem`;
}

for (i; i <= 100; i += 1) {
  const px = `${i}px`;
  const px10 = `${i}0px`;

  sizes.percents[`${i}pc`] = `${i}%`;
  sizes.pixelsByOne[px] = px;
  sizes.pixelsByTen[px10] = px10;
  sizes.rems[i] = `${BigNumber(i).dividedBy(4).toString()}rem`;
}

for (i; i <= 128; i += 1) {
  const px10 = `${i}0px`;

  sizes.pixelsByTen[px10] = px10;
  sizes.rems[i] = `${BigNumber(i).dividedBy(4).toString()}rem`;
}

for (i; i <= 240; i += 1) {
  sizes.rems[i] = `${BigNumber(i).dividedBy(4).toString()}rem`;
}

module.exports = sizes;
