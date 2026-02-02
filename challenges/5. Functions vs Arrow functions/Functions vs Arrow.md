Challenge: Function Identity Test

Problem:
Create functions using: function declarations, function expressions, arrow functions

Test: hoisting behavior, this behavior (basic level), reusability





 --- After Challenge ---

 
You must be able to explain:

Why arrow functions exist

When not to use them

How hoisting changes execution order


Notes:

- Why Arrow Functions Exist

Arrow functions were introduced in JavaScript mainly to solve problems with how this behaves in normal functions and to provide shorter, cleaner syntax for writing functions.

In normal functions, the value of this depends on how the function is called, which can easily lead to bugs when functions are passed around, especially inside callbacks or nested functions. Arrow functions fix this by not creating their own this value. Instead, they inherit this from the surrounding code where they were created. This makes behavior more predictable and reduces common mistakes.

Arrow functions also improve readability by allowing developers to write shorter and more expressive code, particularly when working with array methods like map, filter, and reduce, or when writing simple helper functions.

- When NOT To Use Arrow Functions

Arrow functions are not always the correct choice. They should be avoided when a function needs its own this value.

One major example is object methods. If an arrow function is used as a method inside an object, it will not reference the object itself. Instead, it will inherit this from the outer scope, which often leads to unexpected behavior or undefined.

Arrow functions should also be avoided when working with:

Class methods that rely on instance data

Event listeners where this should refer to the element triggering the event

Situations where functions need to be dynamically bound or reused with different contexts

In these cases, normal function declarations or expressions are preferred because they allow this to change depending on how the function is called.

- How Hoisting Changes Execution Order

Hoisting is JavaScript’s behavior of moving certain declarations to the top of their scope before code execution begins. This can affect how and when functions and variables are accessible.

Function declarations are fully hoisted. This means they can be called before they appear in the code because JavaScript loads the entire function definition into memory during the compilation phase.

Example behavior:

Function declarations can be used before they are written in the file.

Function expressions and arrow functions are not fully hoisted.

When arrow functions or function expressions are assigned to variables using let or const, only the variable declaration is hoisted, not its value. This means trying to call them before they are defined results in an error because the function does not yet exist in memory.

Hoisting changes execution order because it creates the illusion that JavaScript runs some declarations before reaching them in the code. Understanding hoisting helps developers avoid runtime errors and better predict how JavaScript loads and executes programs.
