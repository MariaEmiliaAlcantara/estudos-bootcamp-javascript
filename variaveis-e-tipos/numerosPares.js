function changeNumbers(array) {
  if (array.length === 0) {
    return -1;
  }

  for (let i = 0; i < array.length; i++) {
    let evenNumber = array[i] % 2 === 0;
    if (evenNumber && array[i] !== 0) {
      array[i] = 0;
    }
  }

  return array;
}

console.log(changeNumbers([0]));
