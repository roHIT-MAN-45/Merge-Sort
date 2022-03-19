/*
Merge Sort
*/

/*
⚡ In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays.
⚡ Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays.
⚡ This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.
*/

/*
Pseudocode
⚡ Create an empty array, take a look at the smallest values in each input array.
⚡ While there are still values we haven't looked at...
⚡ If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array.
⚡ If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array.
*/

/*
Time Complexity(Best) = O(n log n)
Time Complexity(Average) = O(n log n)
Time Complexity(Worst) = O(n log n)
Space Complexity = O(n)
*/

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let results = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

console.log(merge([2, 33, 46, 50, 55], [1, 4, 5, 88, 90, 91, 99, 120]));

/*
Merge Sort With Recursion
*/

/*
Pseudocode
⚡ Break up the array into halves until you have arrays that are empty or have one element. (use slice)
⚡ Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.
⚡ Once the arrays has been merged back together, return the merged (and sorted) array.
*/

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid)); // Passing only mid will automatically slices whole array from mid.
  return merge(left, right);
}

console.log(
  mergeSort([1, 9, 13, 345, 666, 789, 909, 33, 55, 78, 98, 2, 5, 7, 123])
);
