var assert = require('assert');

var mostWordsEndWith = function(sentence) {
  var strSplit = sentence.split(" ");
  var object = {};
  var highestNo = 0;
  //var blah = null;
  var letter="";
  var mostWords=[];
  //var arr=[];
  for (var i = 0; i < strSplit.length; i++) {
    var currentWord = strSplit[i]; //ind words
    var endLetter = currentWord[currentWord.length - 1];  //last letter
    //console.log(endLetter);
    if (object[endLetter] === undefined) {
      object[endLetter] = []; //make letter 0 if not in obj
      //console.log(object[currentWord]);
    }
    object[endLetter].push(currentWord);  //increment as more of same letter find in obj
    //console.log(object[currentWord]++); //also can use object[splitSentencesent]++;  'object' is object now storing words in sentence/
  }

  for (var currentEndLetter in object) {              //loop thru obj
    if (highestNo < object[currentEndLetter].length) {
      highestNo = object[currentEndLetter].length;              //highest score=letter
      letter= currentEndLetter;
      mostWords = object[currentEndLetter];
      //  blah=currentWord[i];

      //  console.log(highestNo);
    }
    //if(map[sent])
  }
  //console.log(highestNo);
  return {letter :letter,
  occurences : highestNo, words : mostWords};
  //
  //  if(sent[i].endsWith()){console.log(word);}

}
var sentence ='Down by the river there is a man that quiver and shiver, but he needs to deliver a packet that he think is a big racket and a packet of of gum.'
//console.log(mostWordsEndWith('Down by the river there is a man that quiver and shiver, but he needs to deliver a packet that he think is a big racket and a packet of of gum.'));
assert.deepEqual(mostWordsEndWith(sentence),{letter :'t', occurences : 6, words : [ 'that', 'but', 'packet', 'that', 'racket', 'packet' ]});
