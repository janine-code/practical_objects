var itemList = [{
  name: 'apples',
  qty: 10
}, {
  name: 'pears',
  qty: 37
}, {
  name: 'bananas',
  qty: 27
}, {
  name: 'oranges',
  qty: 3
}, ];

var findItemsOver = function(itemList) {
  var arrItems = [];
  var priceMap = {
    'apples': 2.50,
    'pears': 27,
    'bananas': 30,
    'oranges': 4.99
  }
  for (var i = 0; i < itemList.length; i++) {
    var items = itemList[i];
    var listEachItem = items.name;
    var price = priceMap[listEachItem];

    if (items.price > 25) {
      arrItems.push(items);
    }
  }
  return arrItems;
}
console.log(findItemsOver(itemList));
