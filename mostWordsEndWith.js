var sentence = 'Down by the river there is a man that quiver and shiver, but he needs to deliver a packet that he think is a big racket and a packet of of gum.'

var mostWordsEndWith = function(sentence){
  var strSplit = sentence.strSplit(" ");
  var map ={};
  //var arr=[];
  for(var i=0;i<strSplit.length;i++){
var sent = strSplit[i];
if(map[sent]===undefined){
  map[sent]=0;
  map[sent]=map[sent]+1;
}
  //  if(strSplit.endsWith()){
    //    arr.push(strSplit);
      //  console.log(arr);
    //}
  }
  //return arr;
}
console.log(mostWordsEndWith('Down by the river there is a man that quiver and shiver, but he needs to deliver a packet that he think is a big racket and a packet of of gum.'));
