// 1. Difference between var and let?

// you cant redeclare with let. you can access a "hoisted variable" with var. let creates a block scope

// 2. Difference of var and const?

// cant redeclare of reassign with const like you can with var. const creates a blockk scope

// 3. you can reassign with let

// 4. hoisting means that variables are lifted, or "hoisted" to the top of the scope they are declared in. for example since var variables are 
// hoisted by default, a code writen like this:

// var currentYear = 2022;

// would look something like this behind the scenes:

// //top of scope
// //currently set to undefined
// var currentYear;

// //within scope
// currentYear = 2022
