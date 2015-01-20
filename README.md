Fermat
======

Fermat is a simple library for organising web states and generating urls. 

  var fermat = require('../lib/fermat')({
      'Inbox': '/inbox',
      'Tag': '/tag/:tag',
      'Calendar': '/calendar/:month/:day'
  });
  
  fermat('Calendar', {
    month: 'march',
    day: '14'
  });
  
  // /calendar/march/14
