export function getHeapSortAnimations(array) {
    const animate = [];
    heapsort(array, array.length, animate);
    return animate;
}

function heapsort(arr, n, animate){
    for(let i=(n/2)-1; i>=0;i--)
        heapify(arr, n, i, animate);
    
    for(let i=n-1;i>0;i--){
        animate.push([i, 0]); //change color
        animate.push([i,arr[0]]);
        animate.push([i, 0]); //revert color
        animate.push([0,arr[i]]);    
        [arr[0],arr[i]]=[arr[i],arr[0]];
        heapify(arr, i, 0, animate);
    }
}

function heapify(arr, n, i, animate){
    let largest=i;
    let l=(2*i)+1;
    let r=(2*i)+2;

    if (l < n && arr[l] > arr[largest])
        largest = l;
 
    if (r < n && arr[r] > arr[largest])
        largest = r;
 
    if (largest !== i) {
        [arr[i],arr[largest]]=[arr[largest],arr[i]];
        animate.push([i, largest]); //change color
        animate.push([i,arr[largest]]);
        animate.push([i, largest]); //revert color
        animate.push([largest,arr[i]]);    
        heapify(arr, n, largest, animate);
    }
}