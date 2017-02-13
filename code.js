let cleanPunc = function(txt){
  return txt.replace(/[^\w\s]/g, " ");
}

let getWords = function(txt){
  let cleanedTxt = cleanPunc(txt).trim();
  let wordList = cleanedTxt.split(/\s+/);
  let numWords = wordList.length;
  if (numWords.length === 1 && wordList[0] === ""){
    return 0;
  }
  else {
    return numWords;
  }
}

let getNonEmptyLines = function(txt){
  let lineList = txt.split(/\n/);
  let numEmptyLines = 0
  for (let i=0; i<lineList.length; i++){
    strippedLine = lineList[i].trim();
    if (strippedLine.length === 0)
      numEmptyLines++;
  }
  return lineList.length - numEmptyLines;
}

let getLongestLine = function(txt) {
  let lineList = txt.split('\n');
  let longest = lineList.reduce(function (a,b) {return a.length > b.length ? a: b});
  return longest.length;
}

let getAvgWordLength = function(txt){
  let cleanedTxt = cleanPunc(txt).trim();
  let wordList = cleanedTxt.split(/\s+/);
  let wordAvg = 0;
  for (let i=0; i<wordList.length; i++)
    wordAvg += wordList[i].length;
  return wordAvg / wordList.length;
}

let checkPalindrome = function(str){
  let charArray = str.split("");
  let reverseArray = charArray.reverse();
  let reverseString = reverseArray.join("");
  return reverseString.toLowerCase() === str.toLowerCase();
}

let getPalindromes = function(txt){
  let cleanedTxt = cleanPunc(txt).trim();
  let wordList = cleanedTxt.split(/\s+/);
  let palindromeList = [];
  for (let i=0; i<wordList.length; i++){
    if (wordList[i].length > 2)
      if (checkPalindrome(wordList[i]))
        palindromeList.push(wordList[i].toLowerCase());
  }
  return palindromeList;
}

let getLongestWords = function(txt){
  let cleanedTxt = cleanPunc(txt).trim();
  let wordList = cleanedTxt.split(/\s+/);
  let top10 = [];

  while (top10.length < 10){
    let longestWords = [].push(wordList[0]);
    let longestWordLength = wordList[0].length;
    let ties = 1;

    for (let i=1; i<wordList.length; i++){
      if (wordList[i].length === longestWordLength){
        ties++;
        longestWords.push(wordList[i].toLowerCase());
      }
      if (wordList[i].length > longestWordLength){
        longestWords = [];
        longestwords.push(wordList[i].toLowerCase());
        longestWordLength = wordList[i].length;
        ties = 1;
      }
    }

    ties.sort();

    if ((top10.length + ties) < 10){
      for (let j=0; j<longestWords.length; j++){
        top10.push(longestWords[j]);
      }
    }

    else {
      while (top10.length < 10){
        let j=0;
        top10.push(longestWords[j]);
        j++;
      }
    }
  }
  return top10;
}

function getStats(txt) {
    return {
        nChars: txt.length,
        nWords: getWords(txt),
        nLines: txt.split('\n').length,
        nNonEmptyLines: getNonEmptyLines(txt),
        maxLineLength: getLongestLine(txt),
        averageWordLength: getAvgWordLength(txt),
        palindromes: getPalindromes(txt),
        longestWords: getLongestWords(txt),
        mostFrequentWords: [ "hello(7)", "world(1)" ]
    };
}
