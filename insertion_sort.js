function insertionSort(arr) {
  for(i=1;i<arr.length;i++) {
    let temp = arr[i];
    for (j= i -1;j>=0 && arr[j] > temp;j--) {
      //swap
      arr[j+1] = arr[j]
    }
    arr[j+1] = temp;
  }
  return arr;
}

console.log(insertionSort([2,5,1,6,7,3]))