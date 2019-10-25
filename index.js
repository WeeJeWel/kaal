'use strict';

global.consoel = new Proxy(console, {
  get: (obj, prop) => {
    console.log(`Warning: Trying to access 'console.log' but you mistyped 'consoel.log'`);
    return obj[prop];
  },
});