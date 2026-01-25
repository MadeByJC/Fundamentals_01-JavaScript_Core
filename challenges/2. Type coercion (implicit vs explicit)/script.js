function testcoercion() {
    console.log('--- Implicit Coercion ---');

    let string = '5';
    let number = 10;
    
    // Prediction: So What I think will happen is that the result will be 510, the reason behind it is that
    // JS doesn't understand that I'm trying to do math, so it keeps 5 as a string, and slaps it infront of 10
    // I also believe the type of data will be 

    console.log(string + number);
    console.log(typeof(string + number));

    // Result: So, The output I got was 510, so I was correct, Furthermore, the type of data is infact
    // string, I'm thinking my theory was partially correct but a better way to explain it is that JS 
    // sees the string, sees the + operator and concatenates them together

    // ---- //

    // Prediction: This is a interested problem. I'm going to assume that since JS detects it can't remove
    // a number from a string, it's going to use coercion to turn the string into a number. This way, the
    // output should be "-5". And since the coercion happened, the value with be a number and not a string.

    console.log(string - number);
    console.log(typeof(string - number));

    // Result: I was correct, the output was -5 and number. This makes me believe that is JS realizes that a 
    // impossibilty like removing a number from a string, it will attempt coercion. In doing so, JS tries
    // to turn the string into a number, which is successed, but I am currious what would happen if I try and
    // use coercion on something other than a number or string? maybe a Boolean or null?

    // ---- //

    // Prediction: This one is slightly harder to predict, What I assume will happen is either get an error
    // or a null value, But what I think most likely will happen is it will use coercion to turn the string 
    // to an number, and then turn null into a 0. Cause JS would think thats the most logical thing to do to 
    // avoid an error?

    let number2 = null;

    console.log(string - number2);
    console.log(typeof(string - number2));

    // Result: I believe I was correct again, the output was 5 and number. I'm assuming that JS realized that 
    // by default a null can easily be converted to a 0, and that coercion was the next best option, so it turned
    // the string into a number, which means 5 - 0, Would result in the proper output, and since both are a number
    // the data type was number.

    // ---- //

    // Prediction: Now this is a more complex issue, I'm going to assume I'll get either an error, a NaN, or
    // maybe a null. I also think the type would be either bool, null, or maybe number.

    let yes = true;
    let no = false;

    console.log(yes + no);
    console.log(typeof(yes + no));

    // Result: VERY interesting, The output was 1 and number. So I belive the + operator makes JS convert
    // whatever it interpreted into numbers, to make the most sense. And the most logical awnser to 1 would be
    // that 1 is true, and 0 is false, thus 1 + 0 would be 1. Lets try - next and see if the output is -1?

    // ---- //

    // Prediction: Just like I mentioned before, I'm going to assume True = 1 and false = 0, so the awnser
    // SHOULD be -1, with the same data type of number.

    console.log(yes - no);
    console.log(typeof(yes - no));

    // Result: So the output was 1 and number. Very strange, I'm going to research why this is.
    // Oops, small mistake, im just doing 1 - 0 now haha, lets try 0 - 1.

    console.log(no - yes);

    // Result 2: There, It's now outputting -1, so that does confirm true = 1 and false = 0.

    // ---- //


    // Predictions: I'm going to assume it will give a true response. Since I know == just test for the "value"?
    // It's not checking if that data type is the same, but strictly if the value of the variables are the same
    // since null and undefined are considered, nothing, I believe this will be the output.
    // Also data type could be number, but I'm going to assume boolean, because of the response.

    let a = null;
    let b = undefined;

    console.log(a == b);
    console.log(typeof(a == b));

    // Result: I think I'm correct again, the output was true and boolean, meaning that my theory must be right.

    // ---- //

    // Prediction: Now, If it works like I mentioned in the last one, this is now testing for specifically the
    // data types. So the output should be false, and boolean again.

    console.log(a === b);
    console.log(typeof(a === b));

    // Result: Was correct, this help confirm my theory of how JS handles this.

    // ---- //
}