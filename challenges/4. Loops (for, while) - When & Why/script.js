function testLoops() {
    console.log("--- Loops ---")

    // For loops are best for when control logic is centralized.
    // Great when iteration is predicable.
    // Take note that with the output, it begins itterating at 0, and only counts up directly after 
    for (let i = 0; i < 10; i++) {
        console.log("Printing number " + i);
    }


    // While loops are best for when control logic is distributed.
    // Great when stopping is more complex or conditional

    let i = 0;

    while (i < 5) {
        console.log(i);
        i++;
    }


    // This is much harder to read, the conditional is simple to understand, but it's just not as readable as the for loop,
    // I would much rather this be a foor loop as the conditions i'm trying to meet are WAY more predictable.
    let startValue = 1;
    let iteration = 0;

    while (startValue < 10) {
        startValue += 2;
        iteration++;
        console.log(`Your now on iteration:${iteration} with the value of ${startValue}`)
    }


    // So this For loop is much simpler and readable, I could instantly understand what this function is doing just by the
    // conditions in the for loop
    iteration = 0;

    for (startValue = 3; startValue < 10; startValue += 2) {
        iteration++;
        console.log(`Your now on iteration:${iteration} with the value of ${startValue}`);
    }

    // INFINITE LOOP! Because the condition is true and there is nothing that can change the condition to reach false,
    // it will just loop indefintely
    /*
    while (true) {
        console.log("LOOP");
    }
    */

    const words = [
        "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honey", "ice", "juice",
        "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine",
        "ugli", "vanilla", "watermelon", "xigua", "yam", "zucchini", "almond", "biscuit", "carrot", "donut",
        "egg", "falafel", "garlic", "hazelnut", "iceberg", "jalapeno", "ketchup", "lasagna", "meatball", "noodle",
        "oatmeal", "pancake", "quesadilla", "risotto", "sausage", "tofu", "udon", "vinaigrette", "waffle", "xylitol",
        "yogurt", "ziti", "anchor", "bridge", "castle", "desert", "engine", "forest", "garden", "harbor",
        "island", "jungle", "kingdom", "lagoon", "mountain", "nebula", "oasis", "prairie", "quarry", "river",
        "savanna", "tundra", "valley", "waterfall", "xenon", "yard", "zephyr", "artist", "builder", "coder",
        "designer", "editor", "farmer", "gamer", "hacker", "inventor", "juggler", "knitter", "lawyer", "musician",
        "nurse", "officer", "pilot", "quarterback", "researcher", "sailor", "teacher", "umpire", "vendor", "writer"
    ];


    // This is how to efficiently use loops to control performance, this now stops the loop as soon as we hit the proper word
    // This way we dont waste performance searching the WHOLE array and then stopping
    for (let word of words) {
        if (word === "gamer") {
            console.log(`Found the word ${word}`);
            break;
        }
    }



















    // For Each can be used to loop through each index in an array.
    // forEach() can have 
    const numbers = [1, 5, 9, 2, 3];

    numbers.forEach((number, index) => {
        console.log(`The Number at index ${index}: ${number}`);
    });


    // map() can be used to create a new array that is populated with the results of calling a provided
    // function on every element in the calling array.

    // In this example. I time's every value inside the array by 2.
    const mapped = numbers.map((x) => x * 2);

    console.log(mapped)




}