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

let getLongestWords = function (txt) {
  let cleanedTxt = cleanPunc(txt).trim();
  let wordList = cleanedTxt.split(/\s+/);
  let wordLengths = {};

  for (let i=0; i<wordList.length; i++){
    wordList[i] = wordList[i].toLowerCase();
    wordLengths[wordList[i]] = 0;
  }

  for (let i=0; i<wordList.length; i++){
    wordLengths[wordList[i]] = wordList[i].length;
  }

  uniqueWords = 0;
  for (word in wordLengths){
    uniqueWords++;
  }

  let top10 = [];
  if (uniqueWords > 10){
    for (let i=0; i<10; i++){
      let longestLength = 0;
      let longestWord = "";
      for (key in wordLengths){
        let value = wordLengths[key];
        if (value > longestLength){
          longestLength = value;
          longestWord = key;
        }
      }
      top10[i] = longestWord;
      wordLengths[longestWord] = 0;
    }
  }
  else {
    for (let i=0; i<uniqueWords; i++){
      let longestLength = 0;
      let longestWord = "";
      for (key in wordLengths){
        let value = wordLengths[key];
        if (value > longestLength){
          longestLength = value;
          longestWord = key;
        }
      }
      top10[i] = longestWord;
      wordLengths[longestWord] = 0;
    }
  }

  return top10;
}

let getMostFrequentWords = function(txt){
  let cleanedTxt = cleanPunc(txt).trim();
  let wordList = cleanedTxt.split(/\s+/);
  let wordCounts = {};
  for (let i=0; i<wordList.length; i++){
    wordList[i] = wordList[i].toLowerCase();
    wordCounts[wordList[i]] = 0;
  }
  for (let i=0; i<wordList.length; i++){
    wordCounts[wordList[i]] += 1;
  }

  uniqueWords = 0;
  for (word in wordCounts){
    uniqueWords++;
  }

  top10 = [];
  if (uniqueWords > 10){
    for (let i=0; i<10; i++){
      let topFreq = 0;
      let topWord = "";
      for (key in wordCounts){
        let value = wordCounts[key];
        if (value> topFreq){
          topFreq = value;
          topWord = key;
        }
      }
      top10[i]=(topWord + "(" + topFreq + ")");
      wordCounts[topWord] = 0;
    }
  }

  else {
    for (let i=0; i<uniqueWords; i++){
      let topFreq = 0;
      let topWord = "";
      for (key in wordCounts){
        let value = wordCounts[key];
        if (value > topFreq){
          topFreq = value;
          topWord = key;
        }
      }
      top10[i]=(topWord + "(" + topFreq + ")");
      wordCounts[topWord] = 0;
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
        mostFrequentWords: getMostFrequentWords(txt)
    };
}
