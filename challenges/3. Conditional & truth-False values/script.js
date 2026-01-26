function testCond() {
    console.log("--- Conditions ---")

    // runs, so JS coerces this to true
    if (5) {
        console.log("test1");
    }

    // runs, so JS coerces this to true
    if (-1) {
        console.log("test2");
    }

    // --- falsy --- //

    // All of these are falsy, these are explicitly on the falsy list

    // No output, So JS considers 0 as false
    if (0) {
        console.log("test3");
    }

    // No output
    if (false) {
        console.log("test4");
    }

    // No ouput
    if (-0) {
        console.log("test5");
    }

    // No ouput
    if (0n) {
        console.log("test6");
    }

    // No ouput
    if ("") {
        console.log("test7");
    }

    // No ouput
    if (null) {
        console.log("test8");
    }

    // No ouput
    if (undefined) {
        console.log("test9");
    }

    // No ouput
    if (NaN) {
        console.log("test10");
    }

    // --- truthy --- //

    // runs, because "0" isnt an empty string and only empty strings are falsy
    if ("0") {
        console.log("test11");
    }
    
    // Runs, even though its an empty array, All objects are truthy, regardless of their contents
    if ([]) {
        console.log("test12");
    }
}