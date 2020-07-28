// eslint-disable-next-line no-extend-native
Array.prototype.findAndPop = function (callback) {
  let result = [];
  let hasFind = false;
  for (let index = 0; index < this.length; index++) {
    const itemFound = callback(this[index], index, this);
    if (itemFound && !hasFind) {
      hasFind = true;
      result = [this[index], ...result];
    } else {
      result = [...result, this[index]];
    }
  }

  return hasFind ? result : [null, ...result];
};
