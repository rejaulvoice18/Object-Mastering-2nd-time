//Onno arekta object ar method k amar object a bebohar korar jonno bind bebohar kora hoy

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

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 25000
}
// ekjoner basha theke kudal ene mati khura hochhe amar so kudal jar mati kintu tar jachhe na, mati jachhe amar
// so eikhane kajto ai rokom e hocche. chargebill function hochhe onno ekta object ar kintu oita k ene amar object a kaj korachhi
const heroCharge = normalPerson.chargeBill.bind(friendlyPerson);

console.log(heroCharge(2000));
// console.log(normalPerson.chargeBill(400));
// console.log(normalPerson.getFullName);