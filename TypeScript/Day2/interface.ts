interface Json{
    toJson():string
}
class Person implements Json{
    constructor (private fname:string, private lname:string){

    }
    toJson(): string {
        return JSON.stringify({fname:this.fname, lname:this.lname})
    }
}
const obj = new Person('Shaikh', 'Noman')
console.log(obj.toJson())