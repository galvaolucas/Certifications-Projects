//esperado: 1821800271 2091419209

    let input = [501893267, 649027153, 379408215, 452968170, 487530619];

    function miniMaxSum(arr){

    let min, max = 0;
    let sum = 0;
    let arr2 = [];
    
    for (let j=0;j<=arr.length-1;j++){
        for (let i=0; i<=arr.length-1; i++){
        sum += arr[i]
    }
        sum = sum - arr[j];
        arr2[j] = sum;
        sum = 0;
    }
    
    max = arr2[0];
    min = arr2[0];
    
    for(let z=0;z<=arr2.length-1;z++){
        if(arr2[z] >= max){
            max = arr2[z];
        }
        if(arr2[z] > arr2[z+1] && arr2[z+1] < min){
            min = arr2[z+1];
        }
    }
    
    console.log(min, max);
    
}

    miniMaxSum(input);