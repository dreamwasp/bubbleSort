const bubbleSort = (arr, location = 0, runtime = arr.length) => {
  let newArr = [...arr];
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  } else {
    if (arr[location] > arr[location + 1]) {
      console.log('swap', arr, 'location', location);

      newArr = swap(arr, location);

      console.log('newArr', newArr, 'location', location);
    }
    if (runtime === location) {
      console.log('runtime', newArr);
      runtime--;
      location = 0;
    }
    if (runtime === 0) {
      console.log('return?', newArr);
      return newArr;
    }
  }
  console.log('recurse', newArr, location, runtime);

  return bubbleSort(newArr, location + 1, runtime);
};

const swap = (arr, location) => {
  const number1 = arr[location];
  const number2 = arr[location + 1];
  arr.splice(location, 2, number2, number1);
  return arr;
};
