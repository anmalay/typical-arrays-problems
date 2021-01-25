
exports.min = function min (array) {
  if (!array) return 0;
  return array.length === 0 ? 0 : Math.min(...array);
}

exports.max = function max (array) {
  if (!array) return 0;
  return array.length === 0 ? 0 : Math.max(...array);
}

exports.avg = function avg (array) {
  if (!array) return 0;
  return array.length === 0 ? 0 : array.reduce((acc, item) => acc + item) / array.length;
}
