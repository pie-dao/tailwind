# @pie-dao/tailwind

This package provides the [tailwindcss](https://tailwindcss.com) plugin used by the PieDAO [frontend-template repo](https://github.com/pie-dao/frontend-template). Including it in your tailwindcss configuration will give you all of the base styles and classes discussed in the [styling section of https://docs.piedao.org](https://docs.piedao.org/development-resources/styling).

## Installation

`yarn add @pie-dao/tailwind`

```
/* tailwind.config.js */
const piedao = require('@pie-dao/tailwind');

module.exports = {
  theme: {},
  variants: {},
  plugins: [piedao],
}
```

