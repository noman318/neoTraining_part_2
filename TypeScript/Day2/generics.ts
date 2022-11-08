console.log('myGenerics')

function getRanElem<T>(items:T[]):T{
    let ranInd=Math.floor(Math.random()*items.length)
    return items[ranInd]
}
let num=[1,3,4,5,6,7]
let randElem = getRanElem<number>(num)
// console.log(randElem)

function merge<U,V>(obj1:U, obj2:V){
    return {
        ... obj1,
        ... obj2
    }
}
let person = merge({name:'Noman'},{age: 22})
console.log(person)