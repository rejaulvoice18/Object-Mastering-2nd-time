// difference between class and object
// same type/pattern/forma ar onnek gulla object dorkar hole tokhon class crete kore tokhon class theke same type ar object gula banabo.
// class theke object bananur jonno new Keyword bebohar kora hoy.
// class object banai jeno object er propertir similarity thake.

class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Balam', 2000);
const friendlyPerson = new Person('Hero', 'Alom', 25000);

console.log(heroPerson);
console.log(friendlyPerson);