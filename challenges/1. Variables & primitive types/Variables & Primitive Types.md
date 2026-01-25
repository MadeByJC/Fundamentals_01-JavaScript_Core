Challenge: Type Awareness Logger

Problem :
Create a function that takes any value and logs: its value, its type, whether it is mutable or immutable and whether reassignment changes the original value

Requirements :
Test all primitive types, Compare primitives vs objects, Log before & after reassignment

My Plan:
1. Start by login the value that is passed into the function.

2. Use typeof operator to determine what the value is.

3. Now, I'm going to test whether a value is mutable by attempting to modify or reassign it.
I believe primitive values will not change, while ojects and arrays will.

4. Finally, I will compare the original value with the value after reassignment to see whether the original reference was affected.


 --- After Challenge ---

What I've learned:

I started by running basic tests with operators and simple math to understand how JavaScript handles type coercion. This helped me clearly separate == and ===. The == operator compares values after coercion, while === compares both value and type, meaning they must be exactly the same.

I also learned the 7 JavaScript primitive types: number, string, boolean, null, undefined, symbol, and bigint.

I now understand the difference between mutable and immutable values. Primitives are immutable, meaning their values cannot be changed once created. When a primitive like x is reassigned from 10 to 20, the original value is not modified — the variable is simply pointed to a new value.

Arrays and objects (including functions) are mutable. This means their internal values can be changed without creating a new array or object. For example, I can modify elements inside an array and it remains the same array in memory.


-Primitives are immutable values that are stored directly, while objects are reference types that point to a mutable data structure in memory.

-typeof null returning ‘object’ is a long-standing JavaScript bug preserved for backward compatibility, so null must be checked explicitly.

- An array is a single variable that stores multiple values in a specific order, and you access each value by its index

Primitives:
- Immutable
- Stored by value
- Independent copies

Objects:
- Mutable
- Stored by reference
- Shared data

typeof null:
- Returns "object"
- Historical bug
- Must be handled explicitly
