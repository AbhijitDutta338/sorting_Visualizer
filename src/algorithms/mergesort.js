export function getMergeSortAnimations(array) {
  const animate = [];
  const auxArr = array.slice();
  mergesort(array, 0, array.length - 1, auxArr, animate);
  return animate;
}
  
function mergesort(arr,l,r,auxArr,animate){
  if (l === r) return;

  const m = Math.floor((l + r) / 2);

  mergesort(auxArr, l, m, arr, animate);
  mergesort(auxArr, m + 1, r, arr, animate);

  merge(arr, l, m, r, auxArr, animate);
}

function merge(arr,l,m,r,auxArr,animate){
  let k = l;
  let i = l;
  let j = m + 1;
  while(i<=m && j<=r){
    animate.push([i, j]); //change color
    animate.push([i, j]); //revert color
    if(auxArr[i] <= auxArr[j]) {
      animate.push([k, auxArr[i]]); //this is when i%3==2: so here we swap and dont change color
      arr[k++] = auxArr[i++];
    } 
    else{
      animate.push([k, auxArr[j]]); //this is when i%3==2: so here we swap and dont change color
      arr[k++] = auxArr[j++];
    }
  }
  while (i <= m) {
    animate.push([i, i]);
    animate.push([i, i]);
    animate.push([k, auxArr[i]]);
    arr[k++] = auxArr[i++];
  }
  while (j <= r) {
    animate.push([j, j]);
    animate.push([j, j]);
    animate.push([k, auxArr[j]]);
    arr[k++] = auxArr[j++];
  }
}
