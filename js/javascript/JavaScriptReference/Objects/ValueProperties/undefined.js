// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined

// The global undefined property represents the primitive value undefined. It
// is one of JavaScript's primitive types.

// Property attributes of undefined
// Writable	no
// Enumerable	no
// Configurable	no


function test(t) {
  if (t === undefined) {
    return 'Undefined value!';
  }
  return t;
}

let x;

console.log(test(x));
// expected output: "Undefined value!"





/* undefined is a property of the global object. That is, it is a variable in
global scope. The initial value of undefined is the primitive value undefined.

In modern browsers (JavaScript 1.8.5 / Firefox 4+), undefined is a
non-configurable, non-writable property, per the ECMAScript 5 specification.
(Even when this is not the case, avoid overriding it.)

A variable that has not been assigned a value is of type undefined. A method
or statement also returns undefined if the variable that is being evaluated
does not have an assigned value. A function returns undefined if a value was
not returned.

Note: While you can use undefined as an identifier (variable name) in any
scope other than the global scope (because undefined is not a reserved word),
doing so is a very bad idea that will make your code difficult to maintain and
debug.
 */



//  DON'T DO THIS

//  logs "foo string"
(function() {
  var undefined = 'foo';
  console.log(undefined, typeof undefined);
})();

//  logs "foo string"
(function(undefined) {
  console.log(undefined, typeof undefined);
})('foo');



/* Examples Strict equality and undefined You can use undefined and the strict
equality and inequality operators to determine whether a variable has a value.
In the following code, the variable x is not initialized, and the if statement
evaluates to true. */

var x;
if (x === undefined) {
  // these statements execute
}
else {
  // these statements do not execute
}



/* Note: The strict equality operator (as opposed to the standard equality
operator) must be used here, because x == undefined also checks whether x is
null, while strict equality doesn't. This is because null is not equivalent to
undefined.

See comparison operators for details.
 */




// typeof operator and undefined

// Alternatively, typeof can be used:


var x;
if (typeof x === 'undefined') {
   // these statements execute
}



/* One reason to use typeof is that it does not throw an error if the variable
has not been declared. */



//  x has not been declared before
if (typeof x === 'undefined') { //  evaluates to true without errors
   //  these statements execute
}

if (x === undefined) { //  throws a ReferenceError

}


/* However, there is another alternative. JavaScript is a statically scoped
language, so knowing if a variable is declared can be read by seeing whether
it is declared in an enclosing context.

The global scope is bound to the global object, so checking the existence of a
variable in the global context can be done by checking the existence of a
property on the global object, using the in operator, for instance:
 */

if ('x' in window) {
  //  these statements execute only if x is defined globally
}


// void operator and undefined
// The void operator is a third alternative.



var x;
if (x === void 0) {
  //  these statements execute
}

//  y has not been declared before
if (y === void 0) {
  //  throws Uncaught ReferenceError: y is not defined
}
