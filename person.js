const person ={
    name:"Tushar",
    age:"22"
}


class Person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    greeting(){
    console.log(`Myself ${this.name} and i'm ${this.age}`)
}
}
module.exports = Person;