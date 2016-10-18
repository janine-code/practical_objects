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

var mostProfitableDay = function(salesData){
var sum=0;
  var arrMond = [];
var arrTues=[];
var arrWed=[];
var arrThur=[];
var arrFri=[];
  for(var i=0; i<salesData.length; i++){
    var Day = salesData[i];
   var sales = Day.sales;
   var day = Day.day;
   var sal = "";

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
if(arrMond>arrTues&&arrMond>arrWed&&arrMond>arrThur&&arrMond>arrFri){
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
console.log(mostProfitableDay(salesData));
assert.equal(mostProfitableDay(salesData),"Friday is the most profitable day!")
