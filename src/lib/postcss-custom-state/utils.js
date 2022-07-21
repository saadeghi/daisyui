module.exports = {
  findIndices(arr, checkFunction) {
    const indices = [];
    for (var i = 0; i < arr.length; i++) {
      if (checkFunction(arr[i])) indices.push(i)
    }
    return indices;
  },

  deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
};
