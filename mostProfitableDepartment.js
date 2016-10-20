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

var mostProfitableDepartment = function(salesData) {
  var highestProfit = 0;
  var obj = {}; //map
  var depMostProfit = {};
  for (var i = 0; i < salesData.length; i++) {
    var salesD = salesData[i];
    if (obj[salesD.department] === undefined) {
      obj[salesD.department] = 0;
    }
    obj[salesD.department] = obj[salesD.department] + salesD.sales;
  }
  console.log(obj);
  for (var key in obj) {
    if (highestProfit < obj[key]) {
      highestProfit = obj[key];
      depMostProfit = {
        department: key,
        sales: highestProfit
      }

    }

  }
  console.log(depMostProfit);
  return depMostProfit;
}
mostProfitableDepartment(salesData);

assert.deepEqual(mostProfitableDepartment(salesData), {
  department: 'outdoor',
  sales: 42525
})
