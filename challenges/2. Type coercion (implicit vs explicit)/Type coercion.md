Challenge: Coercion Prediction Table

Problem:
Build a script that: Evaluates multiple expressions, Logs the result, Logs why JavaScript produced that result

Example expressions: "5" + 3, "5" - 3, true + false, null == undefined, null === undefined

Hard rule: You must predict the output before running the code.


 --- After Challenge ---

 
    // Overall reflection, I understand now what loose and strict equality is better. == is loose.
    // It checks the types, if they are different it tries to coerce one or both, and then compares the result
    // However, with the strict equality, === has no coercion, no negotiation, no reinterpretations, if it's 
    // different, then it's false.

    // Implicit coercion is: JavaScript automatically converts a value from one type to another without you explicitly asking it to.

    // Explicit coercion is when I clearly tell java "Convert this.".
