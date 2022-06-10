test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar,fromDollarToYen,fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
    expect(fromDollarToYen(2)).toBe(255.8); 
    expect(fromYenToPound(10)).toBe(8); 
})