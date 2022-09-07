let emps = [
    {empId:101,name:'Vamsy',sal:12000,joinDate:new Date('2022-01-01')},
    {empId:102,name:'Srinu',sal:13000,joinDate:new Date('2022-02-01')},
    {empId:103,name:'Suseela',sal:11000,joinDate:new Date('2022-02-01')},
    {empId:104,name:'Indhikaa',sal:15000,joinDate:new Date('2022-03-01')},
    {empId:105,name:'Sagar',sal:9000,joinDate:new Date('2022-04-01')}
];

console.log(emps);
console.log("------------------------------------------------------------");
emps.push({empId:106,name:'Latha',sal:5600,joinDate:new Date('2003-09-01')});
console.log(emps);
console.log("------------------------------------------------------------");
console.log(emps.find(e => e.empId===104));
console.log(emps.findIndex(e => e.empId===104));
console.log(emps.find(e => e.empId===204));
console.log(emps.findIndex(e => e.empId===204));
console.log("------------------------------------------------------------");
emps.splice(4,2);
console.log(emps);
console.log("------------------------------------------------------------");
emps.sort((e1,e2) => e1.sal>e2.sal?1:(e1.sal<e2.sal?-1:0) );
console.log(emps);
console.log("------------------------------------------------------------");
let descriptions = emps.map(e => e.name +" has "+e.empId +" as id and joined on "+e.joinDate.toISOString() +" and earns "+e.sal);
console.log(descriptions);
console.log("------------------------------------------------------------");
emps.forEach(e => e.ta = e.sal/2);
console.log(emps);
console.log("------------------------------------------------------------");
console.log(emps.filter(e => e.sal<=13500));
console.log("------------------------------------------------------------");