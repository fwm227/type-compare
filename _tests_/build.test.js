const typeCompare = require('../bundle.js');

test('type-compare test', () => {
  // true test
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
  // fase test
  expect(typeCompare(undefined, 'null')).toBeFalsy();
  expect(typeCompare(null, 'undefined')).toBeFalsy();
  expect(typeCompare('true', 'boolean')).toBeFalsy();
  expect(typeCompare('123', 'number')).toBeFalsy();
  expect(typeCompare(123, 'string')).toBeFalsy();
  expect(typeCompare(new Object(), 'array')).toBeFalsy();
  expect(typeCompare(new Array(), 'object')).toBeFalsy();
  expect(typeCompare(new Number('123'), 'object.string')).toBeFalsy();
  expect(typeCompare(new String(123), 'object.number')).toBeFalsy();
  expect(typeCompare(new Set(), 'object.object')).toBeFalsy();
  expect(typeCompare(new Map(), 'object.object')).toBeFalsy();
})
