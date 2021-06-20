export function getInsertionSortAnimations(array) {
    const animate = [];
    insertionsort(array, array.length, animate);
    return animate;
}

function insertionsort(arr, n, animate){
    let i, key, j;
    for (i = 1; i < n; i++){
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key){
            animate.push([j, j+1]); //change color
            animate.push([j, j+1]); //revert color
            animate.push([j+1,arr[j]]);    
                
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        animate.push([i, j+1]); //change color
        animate.push([i, j+1]); //revert color
        animate.push([j+1,key]);    
        arr[j + 1] = key;
    }    
}