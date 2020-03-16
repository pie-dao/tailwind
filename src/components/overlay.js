const { rubik } = require('../theme/fontFamily');

module.exports = {
  '.overlay': {
    'position': 'fixed',
    'width': '100%',
    'height': '100%',
    'top': '0',
    'left': '0',
    'background': 'rgba(0, 0, 0, 0.9)',
    'font-family': rubik,
    'text-decoration': 'none',
    'z-index': '99',
  },
  '.overlay .close': {
    'width': '30px',
    'height': '30px',
    'position': 'absolute',
    'right': '20px',
    'top': '20px',
    'overflow': 'hidden',
    'border': 'none',
    'background': 'url(\'data:image/svg+xml,%3Csvg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cg clip-path="url(%23clip0)"%3E%3Crect x="16.3477" y="17.9688" width="3" height="54" transform="rotate(-45 16.3477 17.9688)" fill="white"/%3E%3Crect x="18.4688" y="56.1526" width="3" height="54" transform="rotate(-135 18.4688 56.1526)" fill="white"/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id="clip0"%3E%3Crect width="72" height="72" fill="white"/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A\') no-repeat center center',
    'text-indent': '200%',
    'color': 'transparent',
    'outline': 'none',
    'z-index': '100',
  },
};
