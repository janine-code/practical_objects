var assert = require('assert');

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

var mostProfitableDay = function(salesData) {
  var highestProfit = 0;
  var obj = {}; //map
  var dayMostProfit = {};
  for (var i = 0; i < salesData.length; i++) {
    var salesD = salesData[i];
    if (obj[salesD.day] === undefined) {
      obj[salesD.day] = 0;
    }
    obj[salesD.day] = obj[salesD.day] + salesD.sales;
  }
  for (var key in obj) {
    if (highestProfit < obj[key]) {
      highestProfit = obj[key];
      dayMostProfit = {
        day: key,
        sales: highestProfit
      }

    }

  }
  console.log(dayMostProfit);
  return dayMostProfit;
}
mostProfitableDay(salesData);
assert.deepEqual(mostProfitableDay(salesData), {
  day: 'Thursday',
  sales: 36116
});
