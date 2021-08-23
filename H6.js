var input = `2
Hacker
Rank`

function processData(input) {
    //Enter your code here
 
    var myStringArray = input.split('\n').slice(1);
    
    for (var j = 0; j < myStringArray.length; j++) {
        var read1 = [];
        var read2 = [];
        for (var i=0; i < myStringArray[j].length; i++){
            
            if (i%2===0){
                read1.push(myStringArray[j][i]);
            }
            else{
                read2.push(myStringArray[j][i]);
            }
        }
        var x = read1.toString().replace(/,/g, "");
        var y = read2.toString().replace(/,/g, "");   
        
        console.log(x, y);
    }
}

processData(input);