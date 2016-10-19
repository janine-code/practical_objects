var assert = require('assert');
var shoppingList = [{
  itemName: 'Bread',
  price: 11.00
}, {
  itemName: 'Milk',
  price: 7.00
}, {
  itemName: 'Cheese',
  price: 19.50
}];

var printShoppingList = function(shoppingList) {
  var resultList = "";
  var shop = console.log("ShoppingList:");
  for (var i = 0; i < shoppingList.length; i++) {
    var item = shoppingList[i];
    resultList = console.log("*" + item.itemName + " " + "@" + item.price);
  }
  return shop + resultList;
}
printShoppingList(shoppingList);
//assert.deepEqual(printShoppingList(shoppingList), (ShoppingList: *Bread @11.00*Milk @7.00 *Cheese @19.50));
