const { floor } = Math;

/**
 * Exactly search element in array
 * @param {number[]} a 
 * @param {number} x 
 * @returns {number | null}
 */
function binarySearch(a, x) {
  let [start, finish] = [0, a.length - 1];

  while(start <= finish) {
    let mid = floor((start + finish) / 2);

    if(a[mid] == x) {
      return mid;
    }
    else if(a[mid] < x) {
      start = mid + 1;
    }
    else {
      finish = mid - 1;
    }
  }

  return null;
}

/**
 * Find the lowest index which element is greater than x
 * @param {number[]} a 
 * @param {number} x 
 * @returns {number}
 */
function upperBound(a, x) {
  let [start, finish] = [0, a.length - 1];

  while (start < finish) {
    let mid = floor((start + finish) / 2);

    if(x < a[mid]) {
      finish = mid;
    } else {
      start = mid + 1;
    }
  }

  return start;
}

/**
 * Find the lowest index which element is equal to x or greater
 * @param {number[]} a 
 * @param {number} x 
 * @returns {number}
 */
function lowerBound(a, x) {
  let [start, finish] = [0, a.length - 1];

  while (start < finish) {
    let mid = floor((start + finish) / 2);

    if(a[mid] < x) {
      start = mid + 1;
    } else {
      finish = mid;
    }
  }

  return start;
}

module.exports = {
  binarySearch,
  upperBound,
  lowerBound
};