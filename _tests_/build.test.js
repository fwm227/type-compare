const typeCompare = require('../bundle.js');

test('type-compare test', () => {
  expect(typeCompare(null, 'null')).toBeTruthy();
  expect(typeCompare(undefined, 'undefined')).toBeTruthy();
  expect(typeCompare(true, 'boolean')).toBeTruthy();
  expect(typeCompare(123, 'number')).toBeTruthy();
  expect(typeCompare('123', 'string')).toBeTruthy();
  expect(typeCompare(Symbol(), 'symbol')).toBeTruthy();
  expect(typeCompare(new Array(), 'array')).toBeTruthy();
  expect(typeCompare(new Object(), 'object.object')).toBeTruthy();
  expect(typeCompare(new Number(), 'object.number')).toBeTruthy();
  expect(typeCompare(new String(), 'object.string')).toBeTruthy();
  expect(typeCompare(new Set(), 'object.set')).toBeTruthy();
  expect(typeCompare(new Map(), 'object.map')).toBeTruthy();
})
