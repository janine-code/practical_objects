//var assert = require('assert');

var salesData = [{
  department: 'hardware',
  sales: 4500,
  day: 'Monday'
}, {
  department: 'outdoor',
  sales: 1500,
  day: 'Monday'
}, {
  department: 'carpentry',
  sales: 5500,
  day: 'Monday'
}, {
  department: 'hardware',
  sales: 7500,
  day: 'Tuesday'
}, {
  department: 'outdoor',
  sales: 2505,
  day: 'Tuesday'
}, {
  department: 'carpentry',
  sales: 1540,
  day: 'Tuesday'
}, {
  department: 'hardware',
  sales: 1500,
  day: 'Wednesday'
}, {
  department: 'outdoor',
  sales: 8507,
  day: 'Wednesday'
}, {
  department: 'carpentry',
  sales: 8009,
  day: 'Wednesday'
}, {
  department: 'hardware',
  sales: 12000,
  day: 'Thursday'
}, {
  department: 'outdoor',
  sales: 18007,
  day: 'Thursday'
}, {
  department: 'carpentry',
  sales: 6109,
  day: 'Thursday'
}, {
  department: 'hardware',
  sales: 7005,
  day: 'Friday'
}, {
  department: 'outdoor',
  sales: 12006,
  day: 'Friday'
}, {
  department: 'carpentry',
  sales: 16109,
  day: 'Friday'
}, ];

var mostProfitableDay = function(salesData){

  var arr = [];
  arr2=[];
  var highestProfit = 0;
  for(var i=0; i<salesData.length; i++){
    var Day = salesData[i];
   var sales = Day.sales;
   var day = Day.day;
   var sal = "";
    arr.push(sales);
    //console.log(arr);
    arr2.push(day);
if(highestProfit<arr[i]){
  highestProfit=arr[i];
  sal =arr2;

}
    //if(Math.max(arr[i])){
      //return Math.max(arr);
      //highestProfit = day;
    //}
  }
  return sal;
}
console.log(mostProfitableDay(salesData));
