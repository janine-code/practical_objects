var assert = require('assert');
var shoppingList1 = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
];

var shoppingList2 = [
    { itemName : 'Apples', price : 7.50 },
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 23.00 },
    { itemName : 'Bread', price : 9.50 }
];

var shoppingList = function(items){
var sum = 0;
  for(var i = 0; i< items.length; i++){
  var item = shoppingList1[i];
  sum += item.price;
}
return sum;
}
console.log(shoppingList(shoppingList1));
//console.log(shoppingList(shoppingList2));
assert.equal((shoppingList(shoppingList1)),37.5);
