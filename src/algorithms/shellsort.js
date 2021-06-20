export function getShellSortAnimations(array) {
    const animate = [];
    shellsort(array, array.length, animate);
    return animate;
}

function shellsort(arr, n, animate){
    let i, j, gap, temp;
    for (gap = Math.floor(n/2); gap>=1; gap=Math.floor(gap/2)){
        for(i=gap;i<n;i++){
            temp=arr[i];
            j=i-gap;
            while(j>=0 && arr[j]>temp){
                animate.push([j, j+gap]); //change color
                animate.push([j, j+gap]); //revert color
                animate.push([j+gap,arr[j]]);    
                arr[j + gap] = arr[j];
                j = j - gap;    
            }
            
            animate.push([i, j+gap]); //change color
            animate.push([i, j+gap]); //revert color
            animate.push([j+gap,temp]);    
            arr[j + gap] = temp;
        }
    }    
}