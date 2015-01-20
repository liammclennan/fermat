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

Run Tests
-------

First you need mocha.

    npm install -g mocha
    
Then

    $ npm test

and you should see something happy like

    > fermat@1.0.0 test c:\work\fermat
    > mocha

    Fermat
        some states
          V should generate url without route components
          V should generate a url with a route component
          V should generate a url with multiple route components


    3 passing (17ms)
