export default function typeCheck(val, checkType) {
  var type = typeof val;
  if (val === null) type = 'null';
  else if (Array.isArray(val)) type = val.constructor.name;
  else if (type === 'object') type = `object.${Object.prototype.toString.call(val).slice(8, -1)}`;
  return type.toLowerCase() === checkType;
}
