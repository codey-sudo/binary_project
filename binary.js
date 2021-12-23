let decimalToBinary = function(number) {
    let quotientsArray = [];
    let counter = 0;
    let firstNumber = number;
    
    while (number >= 1) {
        quotientsArray[0] = parseInt(number);
        counter = parseInt(number / 2);
        quotientsArray.push(counter);
        number = number / 2;     
    };

    quotientsArray[0] = firstNumber;
    quotientsArray.pop();

    let remainders = function(number) {
        return number % 2;
    };

    remaindersArray = quotientsArray.map(remainders);
    reversed = remaindersArray.reverse();
    binary = reversed.join('');
    if (number === '') {
        return NaN;
    } else {
        return binary;
    }
       
}








//Binary to decimal conversion Function

let binaryToDecimal = function (num) {

    // in order to break the binary number apart to do operations, it must be converted to a string and the split
    let numberString = num.toString();
    splitDigits = (''+numberString).split('');
    
    //this new array of sub strings for example (['1','0']), will be converted into integers
    let index = 0;
    let binaryArray = [];
    length = splitDigits.length;
    while (index < length) {
        binaryArray.push(parseInt(splitDigits[index]));
        index ++; 
    }

    //storing two arrays: one for the binary number input and the other for base two from binary user input copy
    binaryArrayCopy = binaryArray.slice();
    //this turns the binary input array into corresponding amount of repeating 2s
    baseTwoArray = binaryArray.fill(2)

    //Taking baseTwoArray and using the for loop to exponentiate the elements i,e (2^0, 2^1....)
    baseTwo = [];
    power = 0;
    for (let i = 0; i < baseTwoArray.length; i++) {    
        baseTwo.push(Math.pow(baseTwoArray[i],power));    
        power++; 
    }
    
    // only the baseTwoArray will be reversed. The highest digits are on the left side
    // therefore baseTwo array will have to have the highest number on the left
    binaryArr = binaryArrayCopy
    baseTwo = baseTwo.reverse();

    
    // this takes the product of the two and sums them up
    let sum = 0;
    for(let i=0; i< binaryArr.length; i++) {
        sum += binaryArr[i]*baseTwo[i];
    }
        return sum
    
}