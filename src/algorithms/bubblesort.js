export function getBubbleSortAnimations(array) {
    const animate = [];
    bubblesort(array, array.length, animate);
    return animate;
}

function bubblesort(arr, n, animate){
    let i, j;
    for (i = 0; i < n-1; i++)    
        for (j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1]){
                animate.push([j, j+1]); //change color
                animate.push([j,arr[j+1]]);
                animate.push([j, j+1]); //revert color
                animate.push([j+1,arr[j]]);    
                [arr[j], arr[j+1]]=[arr[j+1], arr[j]]
            }
}