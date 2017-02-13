let cleanPunc = function(txt){
  return txt.replace(/[^\w\s]/, '')
}

let getWords = function(txt){
  let cleanedTxt = cleanPunc(txt);
  let wordList = cleanedTxt.split(/\s+/);
  /* for (let i=0; i<wordList.length; i++){
    wordList[0] = wordList[0].replace(/[^\w\s]/gi, '')
  } */
  numWords = wordList.length;
  if (numWords.length === 1 && wordList[0] === ""){
    return 0;
  }
  else {
    return numWords;
  }
}

// let getNonEmptyLines = function(txt){
//   txt = txt.split('\n')
//   numLines =
// }

let getLongestLine = function(txt) {
  let lineList = txt.split('\n');
  let topLength = 0;
  for (let line in lineList){
    if (line.length > topLength)
      topLength = line.length;
  }
  return topLength;
}

let getAvgWordLength = function(txt){
  let cleanedTxt = cleanPunc(txt);
  let wordList = cleanedTxt.split(/\s+/);
  let numWords = wordList.length;
  let charCount = 0;
  for (let i=0; i<wordList.length; i++){
    charCount += wordList[i].length;
  }
  return charCount/numWords;
}

function getStats(txt) {
    return {
        nChars: txt.length,
        nWords: getWords(txt),
        nLines: txt.split('\n').length,
        nNonEmptyLines: 1,
        averageWordLength: getAvgWordLength(txt),
        maxLineLength: getLongestLine(),
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: [ "hello(7)", "world(1)" ]
    };
}
