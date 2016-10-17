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
  var mostProfitDepArr = [];
  arrHardware = [];
  arrOutdoor = [];
  arrCarpentry = [];
  var highestSales = 0;
  var sum1 = 0;
  var sum2 = 0;
  sum3 = 0;
  for (var i = 0; i < salesData.length; i++) {
    var listDep = salesData[i];
    if (listDep.department === 'hardware') {
      sum1 += listDep.sales;
      arrHardware.push(sum1);
    }
    if (listDep.department === 'outdoor') {
      sum2 += listDep.sales;
      arrOutdoor.push(sum1);
    }
    if (listDep.department === 'carpentry') {
      sum3 += listDep.sales;
      arrCarpentry.push(sum1);
    }
  }
  if (arrCarpentry < arrHardware > arrOutdoor) {
    return 'Hardware'
  } else if (arrCarpentry < arrOutdoor > arrHardware) {
    return 'Outdoor'

  } else {
    return 'Carpentry'
  }
}
console.log(mostProfitableDepartment(salesData));
assert.equal(mostProfitableDepartment(salesData), 'Carpentry')
