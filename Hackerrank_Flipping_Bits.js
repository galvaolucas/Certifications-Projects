function flippingBits(a){
  
    // converting the input integer to binary
    
    let binary = a.toString(2);
    let bits = [];
    let totalBinary = [];
    let converted = []
    let newNumber = 0;
    
    
     
    for (var i=0; i<32-binary.length;i++){
        bits[i] = 0;
    }
    
    bits = bits.join('')
    
    totalBinary = bits + binary;
    
    for (let i=0;i<totalBinary.length;i++){
        if (totalBinary[i] == 0){
            converted[i] = 1;
        }
        else(
            converted[i] = 0
        )
    }
    
        converted = converted.join('');
    
        for (let i=0; i<converted.length;i++){
            if (converted[i] == 1){
            newNumber += Math.pow(2,converted.length-1-i);
            }
        }
    
        return newNumber;
    
    }
    
    flippingBits(9);