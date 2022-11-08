class Car{
    speed: number;
    constructor(){
        this.speed=50;
    }
    acc():number{
        return this.speed+=30;
    }
    checkSpeed():void{
        console.log(`this speed is ${this.speed}`)
    }
    
    
}
//// @ts-expect-error
const obj = new Car();
    // obj.speed()
    obj.checkSpeed()
    obj.acc()
    obj.checkSpeed()
