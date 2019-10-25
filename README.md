# Kaal

Module to help Kyle's code run regardless obvious typos.

This should not be used in any production environment.

## Example

```
require('kaal');

consoel.log('Test: typo');
// Warning: Trying to access 'console.log' but you mistyped 'consoel.log'
// Test: typo

console.log('Test: correct');
// Test: correct
```

## Contributing

See an often-made mistake by Kyle? Create a pull request and we'll have a look at it.