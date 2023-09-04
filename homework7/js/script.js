// class CircleBox {
//   constructor(selector) {
//     this.$el = document.querySelector(selector);
//   }

//   hide() {
//     this.$el.style.display = "none";
//   }

//   show() {
//     this.$el.style.display = "block";
//   }
// }

// class CircleItem extends CircleBox {
//   constructor(options) {
//     super(options.selector);
//     this.$el.style.width = options.size + "px";
//     this.$el.style.height = options.size + "px";
//     this.$el.style.borderRadius = "50%";
//     this.$el.style.background = options.color;
//   }
// }

// const CircleRed = new CircleItem({
//   selector: "#circleRed",
//   color: "red",
//   size: 50,
// });

// const CircleYellow = new CircleItem({
//   selector: "#circleYellow",
//   color: "yellow",
//   size: 70,
// });

// const CircleGreen = new CircleItem({
//   selector: "#circleGreen",
//   color: "green",
//   size: 90,
// });

// function Car (name, color, speed, checkIn){
//     this.name = name;
//     this.color = color;
//     this.speed = speed;
//     this.checkIn = checkIn;
// }

// Car.prototype.message = function () {
//     console.log(`the ${this.name} car is ${this.color} and it's speed - ${this.speed}!`);
// };

// Car.prototype.check = function () {
//     if (this.checkIn == true) {
//         alert(`the ${this.name} car must go to the service station`);
//     } else {
//         console.log(`Have a nice ride!`)
//     }
// };

// const BMW = new Car("bmw", "black", 300, true);

