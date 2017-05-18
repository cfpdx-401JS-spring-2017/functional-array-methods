module.exports = function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === undefined) continue;
    
    callback(array[i], i);
  }
  return undefined;
};