//input
let input = [10, 5, 20, 20, 4, 5, 2, 25, 1];

function breakingRecords(scores) {
    // Write your code here
    let countmax = 0;
    let countmin = 0;
    let controlmax = scores[0];
    let controlmin = scores[0];

    for (var i=0; i<=scores.length;i++){
     if (scores[i] > controlmax){
         controlmax = scores[i];
         countmax += 1;
     }
     else if(scores[i] < controlmin){
         controlmin = scores[i];
         countmin += 1
     }
}
    
    return [countmax, countmin];
    
}

breakingRecords(input);

