/* ES6 Sugar Syntax */

//template Literals
let fnm = "Vamsy Kiran";
let lnm = "Aripka";
let age = 37;
console.log('Hai '+fnm+' '+lnm+'! you are only '+age+' years of age');
console.log(`Hai ${fnm} ${lnm}! you are only ${age} years of age`);

//multi line strings

/*let htmlContent = 
    '<html>' +
    '<body>' +
        '<h1>Hello</h1>' +
    '</body>' +
    '</html>';
*/

let htmlContent = 
    `<html>
      <body>
        <h1>Hello</h1>
      </body>
    </html>`;

console.log(htmlContent);

//optional params

const sum = (a=0,b=0) => (a+b);
console.log(sum());
console.log(sum(12));
console.log(sum(12,13));

//rest operator
const min = (...nums) => !nums ? null : nums.reduce((x,y) => Math.min(x,y));
console.log(min(12,1));
console.log(min(12,1,0,78,87,-99,-12));

//spread operator
let arr1 = [1,2,3,4,5]
let arr2 = [7,8,9,10,11]
let arr3 = [arr1,arr2];
let arr4 = [...arr1,6,...arr2];

console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4)

let emp1 = {id:101,name:'Vamsy Kiran Aripaka',sal:45000};
let emp2 = {...emp1,ta:5500,id:102};
let emp3 = {...emp2,id:103,name:'Shruti'};
console.log(emp1);
console.log(emp2);
console.log(emp3);

//colasce operator (??)
//let count =undefined;
let count =10;
let nextCount = (count??-1)+1;
console.log(nextCount);

