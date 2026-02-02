function testFunction() {
    console.log("--- Functions ---")

    // Takes a and B and parameters.
    function addition(a, b) {
        return a + b;
    };

    console.log(addition(5, 10));


    // Now lets try declaring a variable with a function?
    // Will this behave differently? My theory is that on a visual level, no. But, now that it's declared as a variable, the
    // Variable now reaches the location in memory where the function exist, instead of declaring the function each time or something?

    // When using function declarations, JavaScript hoists them during its setup phase, which allows the function to 
    // be called before it appears in the code.  With function expressions, JavaScript treats them like variable assignments.
    // The function is only created and assigned once execution reaches that line, so calling it before then will cause 
    // an error.  In function expressions, the variable stores a reference to the function object rather than creating 
    // the function each time it is called.

    const addition2 = function(a, b) {
        return a + b;
    };

    console.log(addition2(5, 6));


    // Now with an arrow

    const arrow = (a, b) => {
        return a + b;
    };

    console.log(arrow(5, 8));


    // Calling A function before defining
    tested()

    function tested() {
        console.log("Called function BEFORE defining");
    }


    // Hoisting Test


    // Should output 3
    console.log("calling function");

    console.log(add1(1, 2));

    function add1(a, b) {
        return a + b;
    };


    // Now with expression

    // An error code, "can't access lexical declaration 'add2' before initialization"
    // This goes to show that When you use an expression, it can only call the function once the function has already been
    // declared, since after hoisting, it runs top to bottom.
    
    /*
    console.log("Calling function 2");

    console.log(add2(1, 3));

    const add2 = function(a, b) {
        return a + b;
    };
    */

    // Now an arrow function
    // Same error code "can't access lexical declaration 'add3' before initialization".
    /*
    console.log("Calling function 3");

    console.log(add3(1,4));

    const add3 = (a, b) => {
        return a + b;
    };
    */

}