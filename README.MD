## type-compare

[![Build Status](https://travis-ci.org/reming0227/type-compare.svg?branch=master)](https://travis-ci.org/reming0227/type-compare)
[![Version](https://img.shields.io/badge/npm-1.0.1-blue.svg)](https://www.npmjs.com/package/type-compare)

> better simple and accurate to check type of data

## :package: Installation

```javascript
npm install type-compare --save
```

## :hammer: Usage
```javascript
import typeCompare from 'type-compare';
// result true
typeCompare(null, 'null'); // true
typeCompare(undefined, 'undefined'); // true
typeCompare(true, 'boolean'); // true
typeCompare(123, 'number'); // true
typeCompare('123', 'string'); // true
typeCompare(Symbol(), 'symbol'); // true
typeCompare(new Array(), 'array'); // true
typeCompare(new Object(), 'object.object'); // true
typeCompare(new Number(), 'object.number'); // true
typeCompare(new String(), 'object.string'); // true
typeCompare(new Set(), 'object.set'); // true
typeCompare(new Map(), 'object.map'); // true
// result false
typeCompare(undefined, 'null'); // false
typeCompare(null, 'undefined'); // false
typeCompare('true', 'boolean'); // false
typeCompare('123', 'number'); // false
typeCompare(123, 'string'); // false
typeCompare(new Object(), 'array'); // false
typeCompare(new Array(), 'object'); // false
typeCompare(new Number('123'), 'object.string'); // false
typeCompare(new String(123), 'object.number'); // false
typeCompare(new Set(), 'object.object'); // false
typeCompare(new Map(), 'object.object'); // false
```