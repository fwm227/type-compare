## Type Compare

### check type for data

## :bulb: Installation

```javascript
npm install type-compare --save
```

## :wrench: Usage
```javascript
import typeCompare from 'type-compare';

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
```