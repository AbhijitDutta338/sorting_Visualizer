export function getQuickSortAnimations(array) {
    const animate = [];
    quicksort(array, 0, array.length - 1, animate);
    return animate;
}

function quicksort(arr, l, r, animate){
    if(l<r){
        let pi = partition(arr, l, r, animate);
        quicksort(arr, l, pi-1, animate);
        quicksort(arr, pi+1, r, animate);
    }
}

function partition(arr, l, r, animate){
    let pi=arr[r];
    let i = l-1;
    for(let j=l;j<r;j++){
        if(arr[j]<pi){
            i++;
            animate.push([i, j]); //change color
            animate.push([i,arr[j]]);
            animate.push([i, j]); //revert color
            animate.push([j,arr[i]]);
            [arr[i],arr[j]]=[arr[j],arr[i]];
        }
    }
    animate.push([i+1, r]); //change color
    animate.push([i+1,arr[r]]);
    animate.push([i+1, r]); //revert color
    animate.push([r,arr[i+1]]);        
    [arr[i+1],arr[r]]=[arr[r],arr[i+1]];
    return (i+1);
}

    