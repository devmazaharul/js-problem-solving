//number to words
const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const thousands = ["", "Thousand", "Million", "Billion", "Trillion"];

function numberToWords(num) {
  if (num === 0) return "Zero";

  let words = "";

  function helper(n) {
    let str = "";

    if (n < 10) str = units[n];
    else if (n < 20) str = teens[n - 10];
    else if (n < 100) str = tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + units[n % 10] : "");
    else str = units[Math.floor(n / 100)] + " Hundred" + (n % 100 !== 0 ? " " + helper(n % 100) : "");
    return str;
  }

  let i = 0;
  while (num > 0) {
    let chunk = num % 1000;
    
    if (chunk) {
      words = helper(chunk) + (thousands[i] ? " " + thousands[i] : "") + (words ? " " + words : "");
    }
    num = Math.floor(num / 1000);
    i++;
  }

  return words;
}


// Compact Object
/**
 * @param {Object|Array}
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  let resultobj = {};
  for (let i in obj) {
    if (Array.isArray(obj[i])) {
      const filRes = obj[i].filter((v) => {
        if (v !== false || v !== null || v !== 0) {
          return v;
        }
      });

      resultobj[i] = filRes;
    } else {
      if (obj[i] !== false && obj[i] !== null && obj[i] !== 0) {
        resultobj[i] = obj[i];
      }
    }
  }
  // console.log(resultobj)
  return resultobj;
};

const object = {
  a: 0,
  b: [4, null, false, 1],
  c: [null, 58],
  ss: null,
};

compactObject(object);




//find vowel form string

const findVowel=(str="")=>{
  const result={
    count:0,
    chart:[]
  }
  const vowel=["a","e","i","o","u"];

  for (let i = 0; i < str.length; i++) {
    if(vowel.includes(str[i])){
      result.chart=[...result.chart,str[i]]
      result.count++
    }

  }
  return result;
}

findVowel("hellow world")


//chuck arrry
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
const chunk = (arr, size) => {
  const chunkedArray = [];

  for (let i = 0; i < arr.length; i += size) {

    
    chunkedArray.push(arr.slice(i, i + size));
  }

  return chunkedArray;
};

const arr=[2,1,4,4,6,3]
chunk(arr,3)



console.log(arr.slice(0,2))
