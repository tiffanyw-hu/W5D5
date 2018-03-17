const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {

  reader.question(`Is ${el1} > ${el2}? `, function(answer) {
    if (answer === 'yes') {
      callback(true);
    } else {
      callback(false);
    };
  })

};

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

  if ( i == (arr.length - 1)) {
  outerBubbleSortLoop(madeAnySwaps);
  }

  if ( i < arr.length - 1) {
    askIfGreaterThan( arr[i], arr[i+1], (isGreaterThan) => {
      if ( isGreaterThan === false) {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        madeAnySwaps = true;
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
      } else { continue };
    }
  })
};

function absurdBubbleSort(arr, sortCompletionCallback) {
  if (madeAnySwaps === true) {
    innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
  } else {
    sortCompletionCallback(arr);
  }
};
