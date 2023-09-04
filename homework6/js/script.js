// class Bank {
//     static type = "Bank"
//     constructor(option) {
//         this.summ = option.summ;
//         this.month = option.month;
//         this.p = option.p;
//     }
//     credit() {
//         return console.log("I'm privat")
//     };
// };


// const userBank = new Bank ({
//     summ: 20000,
//     month: 12,
//     p: 1500,
// });

// userBank.credit()

// class NewBank extends Bank {
//     constructor(option) {
//         super(option)
//         this.card = option.card;
//     }
//     credit() {
//         super.credit()
//         console.log("I'm aval")
//     }
// }

// const aval = new NewBank ({
//     summ: 20000,
//     month: 12,
//     p: 1500,
//     card: true,
// });

// console.log(aval.credit())


// class User {
//     constructor(props) {
//         this.name = props.name;
//     };

//     firstName = "";
//     lastName = "";
//     age = "";
//     city = "";

//     set name(newName) {
//         const nameRow = newName.split(" ");
//         this.firstName = nameRow[0];
//         this.lastName = nameRow[1];
//     };

//     get name() {
//         console.log(`Your name is ${this.firstName} and your last name is ${this.lastName}`)
//     }
// }

// const Andrew = new User({
//     name: "Andrew Nosenko",
// });

// console.log(Andrew)

// class CoffeMachine {
//     _coffe = 0

//     constructor(water, power) {
//         this.water = water;
//         this.power = power;
//     }

//     set coffeAmount(value) {
//         if (value < 0) {
//             value = 0;
//         } 
//         this._coffe = value
//     }
// }

// let firstcoffe = new CoffeMachine(80, 50);

// firstcoffe.coffeAmount = -2

// console.log(firstcoffe)