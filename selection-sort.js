

function selectionSort(arr) {
  
  // Copy the original array
  const copArr = arr.slice(0,arr.length);
  // Create an array to store the sorted values
  let sorted = [];
  // While the array is not empty...
  while(copArr.length > 0) {
    // Do not move this console.log
    console.log(sorted.join(","));
    let min = Infinity;
    let minIndie;
    // Find the index of the minimum value in the unsorted half
    for (let i = 0; i < copArr.length; i++) {
      if (copArr[i] < min) {
        min = copArr[i];
        minIndie = i;
      }
    }
    // Save and remove the value at the min index
    sorted.push(...copArr.splice(minIndie, 1));
    // Add the min value to the end of the sorted array
  }
  return sorted;
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let pointer = 0;
  // Repeat while the unsorted half is not empty:
  while(pointer < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));
    let min = Infinity;
    let minIndie;
    // Find the index of the minimum value in the unsorted half
    for (let i = pointer; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIndie = i;
      }
    }

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let j = minIndie; j > pointer; j--) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
    }
    // Put the min value at the divider
    pointer++;
    // Increment the divider and repeat
  }

}


module.exports = [selectionSort, selectionSortInPlace];
