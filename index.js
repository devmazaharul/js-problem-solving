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