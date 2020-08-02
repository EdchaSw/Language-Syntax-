"use strict";
exports.__esModule = true;
//TypeScript follows the same rules as JavaScript for variable declarations. 
//Variables can be declared using: var, let, and const.
//Declarar he inicializar Variable
var isDone = false;
//Constantes
var pi = 3.14;
//Variables
var a = 10;
//Ver valor de una variable
console.log(isDone.valueOf());
console.log(pi.valueOf());
console.log(a.valueOf());
// Basic Types
/*-Boolean-
    The most basic datatype is the simple true/false value*/
var isBool = false;
/*-Number-
    As in JavaScript, all numbers in TypeScript are floating point values.
    These floating point numbers get the type number.
    In addition to hexadecimal and decimal literals,
    TypeScript also supports binary and octal literals
    introduced in ECMAScript 2015.*/
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
/* we use the type string to refer to these textual datatypes.
Just like JavaScript, TypeScript also uses
double quotes (") or single quotes (') to surround string data.*/
var color = "blue";
color = 'red';
/*-String-
    You can also use template strings, which can span multiple lines
    and have embedded expressions. These strings are surrounded
    by the backtick/backquote (`) character, and
    embedded expressions are of the form ${ expr }.*/
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n                            I'll be " + (age + 1) + " years old next month.";
/*-Array-
    TypeScript, like JavaScript, allows you to work with arrays of values.
    Array types can be written in one of two ways.
    In the first, you use the type of the elements followed by [] to
    denote an array of that element type:*/
var list = [1, 2, 3];
//The second way uses a generic array type, Array<elemType>:
var list2 = [1, 2, 3];
/*-Tuple-
    types allow you to express an array with a fixed number of
    elements whose types are known, but need not be the same.
    For example, you may want to represent a value as a pair of a string and a number:*/
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// next Initialize is incorrectly
//x = [10, "hello"]; // Error
//When accessing an element with a known index, the correct type is retrieved:
console.log(x[0].substring(1)); // OK
// next is incorrectly
// Error, 'number' does not have 'substring'
//console.log(x[1].substring(1));
//Accessing an element outside the set of known indices fails with an error:
// Error, Property '3' does not exist on type '[string, number]'.
//x[3] = "world"; 
// Error, Property '5' does not exist on type '[string, number]'
//console.log(x[5].toString()); 
/*-Enum-
    A helpful addition to the standard set of datatypes from JavaScript is the enum.
    As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.*/
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
//By default, enums begin numbering their members starting at 0. You can change
//this by manually setting the value of one of its members. For example, 
//we can start the previous example at 1 instead of 0:
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
//Or, even manually set all the values in the enum:
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
var c3 = Color3.Green;
/*A handy feature of enums is that you can also go from a numeric value to the name
of that value in the enum. For example, if we had the value 2 but weren’t sure what
that mapped to in the Color enum above, we could look up the corresponding name:*/
var Color4;
(function (Color4) {
    Color4[Color4["Red"] = 1] = "Red";
    Color4[Color4["Green"] = 2] = "Green";
    Color4[Color4["Blue"] = 3] = "Blue";
})(Color4 || (Color4 = {}));
var colorName = Color4[2];
// Displays 'Green' as its value is 2 above
console.log(colorName);
/*-Any-
    We may need to describe the type of variables that we do not know
    when we are writing an application. These values may come from dynamic content,
    e.g. from the user or a 3rd party library. In these cases, we want to opt-out
    of type checking and let the values pass through compile-time checks.
    To do so, we label these with the any type:*/
var notSure = 4;
notSure = "maybe a string instead";
// okay, definitely a boolean   
notSure = false;
/*The any type is a powerful way to work with existing JavaScript,
allowing you to gradually opt-in and opt-out of type checking during compilation.
You might expect Object to play a similar role, as it does in other languages.
However, variables of type Object only allow you to assign any value to them.
You can’t call arbitrary methods on them, even ones that actually exist:*/
var notSure2 = 4;
notSure2.ifItExists(); // okay, ifItExists might exist at runtime
notSure2.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var prettySure3 = 4;
// Error: Property 'toFixed' doesn't exist on type 'Object'.
//prettySure3.toFixed(); 
//Note: Avoid using Object in favor of the non-primitive object type as described 
//in our Do’s and Don’ts section.   
/*The any type is also handy if you know some part of the type,
but perhaps not all of it. For example, you may have an array but the
array has a mix of different types:*/
var listAny = [1, true, "free"];
listAny[1] = 100;
/*-Void-
    void is a little like the opposite of any: the absence of having any type at all.
    You may commonly see this as the return type of functions that do not return a value:*/
function warnUser() {
    console.log("This is my warning message");
}
/*Declaring variables of type void is not useful because you can only assign null
(only if --strictNullChecks is not specified, see next section) or undefined to them:*/
var unusable = undefined;
// OK if `--strictNullChecks` is not given
unusable = null;
/*-Null and Undefined-
    In TypeScript, both undefined and null actually have their own types named
    undefined and null respectively. Much like void, they’re not extremely
    useful on their own:*/
// Not much else we can assign to these variables!
var u = undefined;
var n = null;
/*By default null and undefined are subtypes of all other types.
That means you can assign null and undefined to something like number.
However, when using the --strictNullChecks flag, null and undefined are
only assignable to any and their respective types (the one exception being
that undefined is also assignable to void). This helps avoid many common errors.
In cases where you want to pass in either a string or null or undefined,
you can use the union type string | null | undefined.
Union types are an advanced topic that we’ll cover in a later chapter.
As a note: we encourage the use of --strictNullChecks when possible,
but for the purposes of this handbook, we will assume it is turned off*/
/*-Never-
        The never type represents the type of values that never occur. For instance,
        never is the return type for a function expression or an arrow function
        expression that always throws an exception or one that never returns;
        Variables also acquire the type never when narrowed by any type guards
        that can never be true.
        The never type is a subtype of, and assignable to, every type; however,
        no type is a subtype of, or assignable to, never (except never itself).
        Even any isn’t assignable to never.
        Some examples of functions returning never:*/
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 }); // OK
create(null); // OK
// Error
//create(42);
// Error
//create("string"); 
// Error
//create(false);
// Error
//create(undefined);
/*-Type assertions-
        Sometimes you’ll end up in a situation where you’ll know more about a
        value than TypeScript does. Usually this will happen when you know the
        type of some entity could be more specific than its current type.
        Type assertions are a way to tell the compiler “trust me, I know what
        I’m doing.” A type assertion is like a type cast in other languages,
        but performs no special checking or restructuring of data.
        It has no runtime impact, and is used purely by the compiler.
        TypeScript assumes that you, the programmer, have performed any special checks
        that you need.
        Type assertions have two forms. One is the “angle-bracket” syntax:*/
var someValue = "this is a string";
var strLength = someValue.length;
//And the other is the as-syntax:
var someValue2 = "this is a string";
var strLength2 = someValue2.length;
/*The two samples are equivalent. Using one over the other is mostly a
choice of preference; however, when using TypeScript with JSX,
only as-style assertions are allowed*/
/*-A note about let-
        You may’ve noticed that so far, we’ve been using the let keyword instead of
        JavaScript’s var keyword which you might be more familiar with.
        The let keyword was introduced to JavaScript in ES2015 and is now
        considered the standard because it’s safer than var. We’ll discuss the
        details later, but many common problems in JavaScript are alleviated
        by using let, so you should use it instead of var whenever possible.*/ 
