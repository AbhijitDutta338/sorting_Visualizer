export function getSelectionSortAnimations(array) {
    const animate = [];
    selectionsort(array, array.length, animate);
    return animate;
}

function selectionsort(arr, n, animate){
    let i, j;
    for (i = 0; i < n-1; i++){  
        let min=i;  
        for (j = i+1; j < n; j++)
            if (arr[j] < arr[min])
                min=j;
        animate.push([i, min]); //change color
        animate.push([i,arr[min]]);
        animate.push([i, min]); //revert color
        animate.push([min,arr[i]]);    
        [arr[i], arr[min]]=[arr[min], arr[i]];   
    }
}