//JSON
let obj1 = {empId:101,fullName:"Vamsy Kiran",basic:456700};
console.log(obj1);

//Constrcutor Functions
function Emp(empId,fullName,basic){
    this.empId=empId;
    this.fullName=fullName;
    this.basic=basic;
}

let obj2 = new Emp(102,"Srinivas",67890);
console.log(obj2);

//class syntax
class Employee{
    constructor(empId,fullName,basic){
        this.empId=empId;
        this.fullName=fullName;
        this.basic=basic;
    }

    hra(){
        return this.basic*0.10;
    }
}

let obj3 = new Employee(103,"Suseela",980000);
console.log(obj3);

//Inheretence
class Manager extends Employee {
    constructor(empId,fullName,basic,allowence){
        super(empId,fullName,basic);
        this.allowence=allowence;
    }
}

let obj4 = new Manager(104,"Indhikaa",1200000,50000);
console.log(obj4);

//Function Binding

class Rectangle{
    constructor(l,b){
        this.l=l;
        this.b=b;
    }
    area(){
        return this.l*this.b;
    }
    perimeter(){
        return 2*(this.l+this.b);
    }
}

class Circle{
    constructor(r){
        this.r=r;
    }
    area(){
        return Math.PI*Math.pow(this.r,2);
    }
    perimeter(){
        return 2*Math.PI*this.r;
    }
}

function paintCost(paintRate){
    return this.area()*paintRate;
}

let rect = new Rectangle(10,20);
console.log(rect);
console.log(paintCost.bind(rect,2.50));

let cir = new Circle(4.5);
console.log(cir);
console.log(paintCost.bind(cir,2.50));
