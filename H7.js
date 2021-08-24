var n = 4;
var arr = [1, 4, 3, 2];
var inv = [];

for (var i=0; i<n; i++){
    inv[i] = arr[(n-1)-i];
}

console.log(inv);
