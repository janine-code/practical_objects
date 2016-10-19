var assert = require('assert');
var itemList = [{
  name: 'apples',
  price: 10
}, {
  name: 'pears',
  price: 37
}, {
  name: 'bananas',
  price: 27
}, {
  name: 'oranges',
  price: 3
}, ];


var findItemsOver = function(itemList) {
  arrItems = [];
  for (var i = 0; i < itemList.length; i++) {
    var items = itemList[i];
    var blah = items.price;
    if (blah > 20) {
      arrItems.push(items);
    }
  }
  console.log(arrItems);
  return arrItems;
}
findItemsOver(itemList);
assert.deepEqual(findItemsOver(itemList), [ { name: 'pears', price: 37 }, { name: 'bananas', price: 27 } ]);
