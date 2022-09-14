/*import { greet,greetUser } from './greet.mjs';

console.log("Hello ! This is my first node js project!!");

console.log(greet());
console.log(greetUser("Vamsy Kiran")); */

import * as g from './greet.mjs'
import arth from './arth.mjs'
import repayAmount, {simpleInterest } from './loans.mjs'

console.log(g.greet());
console.log(g.greetUser("Vamsy Kiran"));

console.log(arth.sum(10,20));

console.log(simpleInterest(10000,10,1));
console.log(repayAmount(10000,10,1));