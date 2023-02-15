const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 1500,
    getFullName: function(){
        console.log(this.firstName, this.lastName); // object ar vitorer property k function ar vitor theke call korle obossoi this likhe call korte hobe.
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

console.log(normalPerson.chargeBill(400));
console.log(normalPerson.getFullName);