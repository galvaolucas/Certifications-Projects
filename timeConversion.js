function timeConversion(s) {
    
     
    const arr = s.slice(0,8).split(":");
    
    if(s.indexOf("PM") > -1){
        if(arr[0] === 12){
            arr[0] = "12";
            console.log("1");
        }
        else{
            arr[0] = Number(arr[0]) + 12;
            console.log("2");
        }
    }
    // case AM
    else{
        if (arr[0] === 12) {
            arr[0] = '00';
        }   
    }
    return arr.join(':');
}

timeConversion("08:59:59AM");