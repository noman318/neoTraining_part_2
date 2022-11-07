abstract class Employee{
    constructor(private fname:string, private lname:string){

    }
    abstract getSalary():number;
    get FullName():String{
        return `${this.fname} ${this.lname}`
    }
    statement():string{
        return `${this.FullName} got ${this.getSalary()} per month`
    }
}
class FullTimeEmployee extends Employee {
    constructor(fname:string, lname:string, private salary:number){
        super(fname,lname);
    }
    getSalary(): number {
        return this.salary
    }
}
const obj12= new FullTimeEmployee("Shikh", "Noman", 56000);
console.log(obj12.statement());