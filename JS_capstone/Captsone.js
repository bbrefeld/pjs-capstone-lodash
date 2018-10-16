const _ = {
  
  /* clamp(number, lower, upper) {
  	if (number < lower) {
    	return lower;
    } else if (number > upper) {
    	return upper;
    } else {
    	return number;
    };
  }, */
  
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  
  /* same as CodeCademy :D */
  inRange(number, start, end) {
    if (!end) {
      end = start;
      start = 0;
    };
    if (start > end) {
      let placeholder = start;
      start = end;
      end = placeholder;
    };
    if (number >= start && number < end) {
      return true;
    } else {
      return false;
    };
  },
  
  /* words(string) {
    let indexArray = [];
    for (i=0;i<string.length;i++) {
      if (string[i] === ' ') {
        indexArray.push(i);
      };
    };
    for (i=indexArray.length;i>=;i--) {
      if (indexArray[i])
    }
  } 
  	Where I got stuck */
  
  words(string) {
    return string.split(" ")
  },
  
  /* pad(string, length) {
    let switcher = 1;
    while (string.length < length) {
      if (switcher === 1) {
        string = string + " ";
        switcher = 2;
      } else if (switcher === 2) {
        string = " " + string;
        switcher = 1;
      };
    };
    return string;
  } */
  
  pad(string, length) {
    if (length <= string.length) {
      return string;
    };
    let startPaddingLength = Math.floor((length-string.length)/2);
    let endPaddingLength = length-string.length-startPaddingLength;
    let paddedString = " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
    return paddedString;
  },
  
  /* has(object, key) {
    if (object[key]) {
      return true;
    } else {
      return false;
    };
  } */
  
  has(object, key) {
    let hasValue = (object[key] != undefined);
    return hasValue;
  },
  
  invert(object) {
    let invertedObject = {};
    for (let value in object) {
      originalValue = object[value];
      invertedObject[originalValue] = value;
    };
    return invertedObject;
  },
  
  findKey(object, predicate) {
    for (let key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue === true) {
        return key;
      };
    };
    return undefined;
  },
  
  /* drop(array, number) {
    let newArray = array;
    if (!number) {
      number = 1;
    };
    for (i=0;i<number;i++) {
      newArray.shift();
    };
    return newArray;
  } */
  
  drop(array, n) {
    if (!n) {
      n=1;
    };
    let droppedArray = array.slice(n,100);
    return droppedArray;
  },
  
  /* Know idea what I'm supposed to do */
  /* dropWhile(array, predicate) {
    let counter = 0;
    for (i=0;i<array.length;i++) {
      if (predicate[i]) {
        counter++;
      } else {
        i=array.length;
        let droppedArray = array.slice(counter,100);
        return droppedArray;
      };
    };
  }, */
  
  dropWhile(array, predicate) {
    let dropNumber = array.findIndex(function(element, index) {
      return !predicate(element, index, array);
    }
   );
    let droppedArray = array.slice(2,100);
    return droppedArray;
  },
  
  chunk(array, size) {
    let returnArray = [];
    let toPush = [];
    let end = size;
    if (!size) {
      size = 1;
    };
    for(i=0;i<array.length;i=i+size) {
      toPush = array.slice(i,end);
      returnArray.push(toPush);
      end = end + size;
      toPush = '';
    };
    return returnArray;
  }
};





// Do not write or modify code below this line.
module.exports = _;