export const countByObjectKey = (arr, keyName) => {
  var result = [];
  arr.reduce(function (res, value) {
    if (!res[value[keyName]]) {
      res[value[keyName]] = { key: value[keyName], qty: 0 };
      result.push(res[value[keyName]]);
    }
    res[value[keyName]].qty += 1;
    return res;
  }, {});

  return result;

};
