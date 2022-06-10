let oneEuroIs ={
    "JPY":127.9, // japan yen
    "USD":1.2, // us dollar
    "GBP":0.8,  // british pound
}

var fromEuroToDollar = function(dollarValue){
    return dollarValue * 1.2
}

var fromDollarToYen = function(YenValue){
    return   YenValue * 127.9
}
var fromYenToPound = function(PoundValue){
    return PoundValue * 0.8
}
console.log(fromEuroToDollar(3.5))
console.log(fromEuroToDollar(2))
console.log(fromEuroToDollar(10))
module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound };