function largeSum(arr) {

    let sum = 0;

    for (var i = 0; i < testNums.length; i++) {
        sum += Number(testNums[i]);
    }

    let str = sum.toString().slice(0, 11).split(".").join('');

    console.log(str);
}

// Only change code above this line

const testNums = [
    '37107287533902102798797998220837590246510135740250',
    '46376937677490009712648124896970078050417018260538'
];

largeSum(testNums);