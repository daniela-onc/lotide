const assert = require('./assertEqual');

//create a funtion tail that return all elems of array, excepting the head

const tail = function (array) {
  return !array ? [] : array.slice(1, array.length);
};



module.exports = tail;