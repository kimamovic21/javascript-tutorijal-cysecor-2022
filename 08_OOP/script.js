// const Person = {
//     first_name: 'Kerim',
//     last_name: 'Imamovic',
//     phone: '123456789',
//     getNameAndPhone: function() {
//         console.log(`${this.first_name} - ${this.phone}`);
//     },
// };

// const Person2 = {
//     first_name: 'John',
//     last_name: 'Doe',
//     phone: '123456',
//     getNameAndPhone: function() {
//         console.log(`${this.first_name} - ${this.phone}`);
//     },
// };

// Person.getNameAndPhone();
// Person2.getNameAndPhone();





// function Person (first_name, last_name, phone) {
//     this.first_name = first_name;
//     this.last_name = last_name;
//     this.phone = phone;
//     this.getNameAndPhone = function() {
//         console.log(`${first_name} - ${phone}`);
//     }
// };

// let person1 = new Person('Kerim', 'Imamovic', '123456789');
// let person2 = new Person('Jonh', 'Doe', '123456');

// person1.getNameAndPhone();
// person2.getNameAndPhone();





// const Person = {
//     first_name: 'Kerim',
//     getNameAndPhone: function() {
//         console.log(`${this.first_name} - ${this.phone}`)
//     }
// };

// Person.phone = '123456';
// Person.getNameAndPhone();

// let john = Object.create(Person);
// john.first_name = 'John'
// john.phone = '123456';
// john.getNameAndPhone();
// console.log(john);

// let mike = Object.create(Person);
// mike.first_name = 'Mike';
// mike.phone = '11223344';
// mike.getNameAndPhone();
// console.log(mike);




// class Person {
//     constructor(first_name, last_name, phone) {
//         this.first_name = first_name;
//         this.last_name = last_name;
//         this.phone = phone;
//     }
//     getNameAndPhone() {
//         console.log(`${this.first_name} - ${this.phone}`)
//     }
// }
// console.log(Person);

// let person1 = new Person('Kerim', 'Imamovic', '123456789');
// console.log(person1);
// let person2 = new Person('John', 'Doe', '1122334455');
// console.log(person2);

// console.log(person1.last_name);
// console.log(person2.last_name)

// person1.getNameAndPhone();
// person2.getNameAndPhone();


