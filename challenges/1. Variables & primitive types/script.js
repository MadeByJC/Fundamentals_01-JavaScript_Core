function testValue() {
    /*
    //Test 1
    let x = 10;
    let y = '10';

    // outputs 1010, because of string concatenation
    console.log(x + y); 
    // outputs 'string', because the result is a string
    console.log(typeof (x + y));
    // outputs false, because types are different
    console.log(x === y);
    // outputs true, because values are equal after type coercion
    console.log(x == y);
    // outputs 1, because '10' is coerced to number 10
    console.log(x / y);

    // Now let's change y to a number and see what happens

    x = 10;
    y = 10;

    // outputs 20, because both are numbers now
    console.log(x + y); 
    // outputs true, because both value and type are the same 
    console.log(x === y);
    // still true, because values are equal because coercion is not needed
    console.log(x == y);
    // outputs 1, both are numbers and division works as expected
    console.log(x / y);
    // outputs 100, multiplication works as expected
    console.log(x * y)
    // outputs 10000000000, exponentiation works as expected
    console.log(x ** y);
    console.log(typeof (x + y)); // outputs 'number'

    //Now, lets test with null and undefined

    let a = null;
    let b;

    // outputs 0, null is coerced to 0
    console.log(a + 0);
    // outputs NaN, undefined is coerced to NaN and any operation with NaN results in NaN
    console.log(b + 0);

    b = 20;
    // outputs 20, null is coerced to 0
    console.log(a + b);
    // outputs 20, null is coerced to 0
    console.log(b + a);

    */


    /*
    // Test 2
    let a = 10;
    let b = 20;

    b = a;

    // Both log 10 since b was assigned the value of a
    console.log(a); 
    console.log(b); 

    let object1 = { count: 10 };
    let object2 = object1;

    object2.count = 20;

    // Logs 20 since object2 references the same object as object1
    console.log(object1.count); 
    console.log(object2.count);


    // Now with strings
    let str1 = "Hello";
    let str2 = str1;

    str2 = "World";

    // Logs "Hello" since strings are primitive and str2 was reassigned
    console.log(str1);
    console.log(str2);

    // outputs 'object'
    console.log(typeof null); 

    // outputs 'Hellonull' because of string concatenation
    console.log(str2 + null);

    */

    /*
    // Test 3
    let arr1 = [1, 2, 3];
    let arr2 = arr1;

    // adding an element to arr2
    arr2.push(4);

    console.log(arr1); 
    console.log(arr2); 

    console.log(arr1 === arr2); // outputs true
    console.log(typeof arr1); // outputs 'object'
    console.log(Array.isArray(arr1)); // outputs true
    console.log(Array.isArray(arr2)); // outputs true

    
    */

    // Test 4
    let objectA = { value: 5 };
    let objectB = objectA;

    objectB = { value: 75 };

    console.log(objectA.value); // outputs 5
    console.log(objectB.value); // outputs 75
}