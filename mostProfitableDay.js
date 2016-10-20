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

/* first approach
var mostProfitableDay = function(salesData){
var sum=0;
  var arrMond = [];
var arrTues=[];
var arrWed=[];
var arrThur=[];
var arrFri=[];
var day ="";
var highestNo="";
  for(var i=0; i<salesData.length; i++){
    var Day = salesData[i];
   var sales = Day.sales;
   var day = Day.day;


    if(day==='Monday'){
sum+=sales;
arrMond.push(sum);
    }
    if(day==='Tuesday'){
  sum+=sales;
  arrTues.push(sum);
    }
    if(day==='Wednesday'){
  sum+=sales;
  arrWed.push(sum);
    }
    if(day==='Thursday'){
sum+=sales;
arrThur.push(sum);
    }
    if(day==='Friday'){
sum+=sales;
arrFri.push(sum);
    }


  }
  map={
    monday:arrMond[0], Tues:arrTues[0], Wed:arrWed[0], Thu:arrThur[0], Fri:arrFri[0]
  }
  for(var key in map){
  if(highestNo<map[key]){
    highestNo=map[key];
    day = key;
  }
  return day;
}
}
/* if(arrMond>arrTues&&arrMond>arrWed&&arrMond>arrThur&&arrMond>arrFri){
  return "Monday is the most profitable day!"
}
if(arrTues>arrMond&&arrTues>arrWed&&arrTues>arrThur&&arrTues>arrFri){
  return "Tuesday is the most profitable day!"
}
if(arrWed>arrMond&&arrWed>arrTues&&arrWed>arrThur&&arrWed>arrFri){
  return "Wednesday is the most profitable day!"
}
if(arrThur>arrMond&&arrThur>arrTues&&arrThur>arrWed&&arrThur>arrFri){
  return "Thursday is the most profitable day!"
}
if(arrFri>arrTues&&arrFri>arrWed&&arrFri>arrThur&&arrFri>arrMond){
  return "Friday is the most profitable day!"
}
}
console.log(mostProfitableDay(salesData));*/

//second approach

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
