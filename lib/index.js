// compares a to b if greater return true
const defaultComparator = (a, b) => {
  const numA = +a
  const numB = +b
  if(!isFinite(numA) || !isFinite(numB)) {
    throw new Error('Default comparator supports only numbers')
  }

  return numA > numB
}

const validate = (arr, maxLen = 1000) => {
  if(!Array.isArray(arr)) {
    throw new Error('Only arrays can be sorted')
  }

  if(arr.length > maxLen) {
    throw new Error(`Arrays can have a maximun length of ${maxLen}`)
  }
}

// Bubble sort
module.exports.bubbleSort = (unsortedArray = [], comparator = defaultComparator) => {
  const maxLen = 500
  validate(unsortedArray, maxLen)

  if(unsortedArray.length < 2) {
    return unsortedArray
  }

  function doSort(arr) {
    let swapOccured = false
    const limit = arr.length - 1
    for(let i = 0; i !== limit; i++) {
      const a = arr[i]
      const b = arr[i + 1]
      if(comparator(a, b)) {
        arr[i] = b
        arr[i + 1] = a
        if(!swapOccured) {
          swapOccured = true
        }
      }
    }
    if(swapOccured) {
      doSort(arr)
    }
  }

  function sort(arr) {
    doSort(arr)
    return arr
  }

  // Don't mutate the original array, use slice
  return sort(unsortedArray.slice())
}

// Merge sort
module.exports.mergeSort = (unsortedArray = [], comparator = defaultComparator) => {
  validate(unsortedArray)

  if(unsortedArray.length < 2) {
    return unsortedArray
  }

  function doSort(aArr, bArr) {
    const sortedArr = []

    while(aArr.length !== 0 && bArr.length !== 0) {
      if(comparator(aArr[0], bArr[0])) {
        sortedArr.push(bArr[0])
        bArr = bArr.slice(1)
      } else {
        sortedArr.push(aArr[0])
        aArr = aArr.slice(1)
      }
    }

    while(aArr.length !== 0)
      sortedArr.push(aArr.shift())

    while(bArr.length !== 0)
      sortedArr.push(bArr.shift())

    return sortedArr
  }

  function sort(arr) {
    if (arr.length < 2) {
      return arr
    } else {
      const bIdx = Math.trunc(arr.length / 2);
      const aArr = arr.slice(0, bIdx);
      const bArr = arr.slice(bIdx, arr.length);

      return doSort(sort(aArr), sort(bArr));
    }
  }

  return sort(unsortedArray)
}
