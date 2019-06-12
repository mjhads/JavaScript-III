/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding: When 'this' is not tucked into another function/object. It is simply place in the window.
* 2. Implicit Binding: 'this' belongs to the object left of the dot.
* 3. New Binding: 'this' belongs to the new object that was just created
* 4. Explicit Binding: When the call or apply method is used
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const friend = {
    name: Jordan,
    age: 30,
    location: Vancouver
    into: function() {
        return `${this.name} lives in ${this.location}, he's ${this.age} and he's my BEST friend!`;
    }
}

// Principle 3

// code example for New Binding
function friends = {
    name: this.name,
    intro: function () {
        return `${this.name} is my BEST friend!`;
    }
}

const jesse = new friends('Jesse');
const mikayla = new friends('Mikayla');

// Principle 4

// code example for Explicit Binding

const change = mikayla.intro.bind(jesse);

console.log(change());