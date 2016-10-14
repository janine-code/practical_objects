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

var printShoppingList = function() {
  console.log("ShoppingList:");
  for (var i = 0; i < shoppingList.length; i++) {
    var item = shoppingList[i];
    console.log("*"+item.itemName + " " + "*"+"@"+item.price);
  }
}
printShoppingList();
