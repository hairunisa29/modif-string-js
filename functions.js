"use strict";

let button = document.querySelector("#buttonClick");
let displayOutput1 = document.querySelector("#changeToFibo");
let displayOutput2 = document.querySelector("#changeToOdd");
let displayOutput3 = document.querySelector("#changeToEven");
let displayOutput4 = document.querySelector("#changeToNumAlp");

button.addEventListener("click", () => {
  let userInput = document.querySelector("#inputStr").value;

  let selectFibo = document.querySelector("#fibonacciSeries");
  let selectOdd = document.querySelector("#oddSeries");
  let selectEven = document.querySelector("#evenSeries");
  let selectNumAlp = document.querySelector("#numAlpSeries");

  let resultOfSequence = {};
  let typeOfSequence;


  let select = document.getElementById('selectSequence').value;
    if(select == 'fibonacci') {
      typeOfSequence = selectFibo.value;
      displayOutput1.innerHTML = replaceVowel(
        userInput,
        generateFibonacci(userInput),
        typeOfSequence
      );
    }

    else if(select == 'odd') {
      typeOfSequence = selectOdd.value;
      displayOutput2.innerHTML = replaceVowel(
        userInput,
        generateOdd(userInput),
        typeOfSequence
      );
    }

    else if(select == 'even') {
      typeOfSequence = selectEven.value;
      displayOutput3.innerHTML = replaceVowel(
        userInput,
        generateEven(userInput),
        typeOfSequence
      );
    }

    else if(select == 'numAlp') {
      typeOfSequence = selectNumAlp.value;
      displayOutput4.innerHTML = replaceVowel(
        userInput,
        generateNumber(userInput),
        typeOfSequence,
        generateAlphabet(userInput)
      );
    }

  console.log(resultOfSequence);

  

  function checkTotalVowels(string) {
    let vowels = "aiueoAIUEO";
    let count = 0;

    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        count++;
      }
    }
    return count;
  }

  function generateFibonacci(string) {
    let fibo=[0];
    let prev=0;
    let next=1;
    let arrayOfStr = string.split('');
         
    
    for (let i = 0; i<arrayOfStr.length; i++){
      let sum = next;
      next = prev + next;
      prev = sum;
      fibo.push(sum);
    }
    
    resultOfSequence.fibonacciSequence = fibo;
    return resultOfSequence;
  }

  function generateEven(string) {
    let evenNum = [2];
    let initial = 2;
    let arrayOfStr = string.split('');
    
    
    for (let i=0; i < arrayOfStr.length; i++){
      initial=initial + 2;
      evenNum.push(initial);     
    }
    resultOfSequence.evenSequence = evenNum;
    return resultOfSequence;
  }

  function generateOdd(string) {
    let oddNum = [1];
    let initial = 1;
    let arrayOfStr = string.split('');
        
    
    for (let i=0; i < arrayOfStr.length; i++){
      initial=initial + 2;
      oddNum.push(initial);
    }
    resultOfSequence.oddSequence = oddNum;
    return resultOfSequence;
  }

  function generateNumber(string) {
    let totalChar = checkTotalVowels(string) / 2;
    let numSequence = [];

    for (let i = 1; i <= totalChar; i++) {
      numSequence.push(i);
    }
    resultOfSequence.numSequence = numSequence;
    return resultOfSequence;
  }

  function generateAlphabet(string) {
    let alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let alpSequence = [];
    let totalChar = checkTotalVowels(string) / 2;

    for (let i = 0; i <= totalChar - 1; i++) {
      alpSequence.push(alphabet[i]);
    }
    resultOfSequence.alpSequence = alpSequence;
    return resultOfSequence;
  }

  function replaceVowel(string, sequence, typeOfSequence, sequenceAlph) {
    let vowels = "aiueoAIUEO";
    let arrayOfString = string.split("");
    let count = 0;
    let countNumAp = 0;
    let countNum = 0;
    let countAlp = 0;

    for (let i = 0; i < arrayOfString.length; i++) {
      if (vowels.includes(arrayOfString[i])) {
        if (typeOfSequence == "fibonacci") {
          arrayOfString[i] = sequence.fibonacciSequence[count];
          sequence.fibonacciSequence;
          count++;
        } else if (typeOfSequence == "odd") {
          arrayOfString[i] = sequence.oddSequence[count];
          count++;
        } else if (typeOfSequence == "even") {
          arrayOfString[i] = sequence.evenSequence[count];
          count++;
        } else if (typeOfSequence == "numAlp") {
          if (countNumAp % 2 == 0) {
            arrayOfString[i] = sequence.numSequence[countNum];
            countNum++;
          } else {
            arrayOfString[i] = sequenceAlph.alpSequence[countAlp];
            countAlp++;
          }
          countNumAp++;
        }
      }
    }

    return arrayOfString.join("");
  }
});