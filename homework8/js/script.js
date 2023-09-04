// замикання

// function addNewUrl(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`;
//     }
// };

// const tldurl = addNewUrl("com");

// console.log(tldurl("xpertwrker"));


// function changeLook() {
//     this.style.background = "red";
//     this.style.borderBottom = "2px solid red";
//     this.style.color = "green";
// }

// let user = document.querySelectorAll('div');

// user.forEach(function (element) {
//     element.onclick = changeLook;
// })

// const userInfo = {
//     name: "name",
//     age: "age",
//     clientInformation: function (job, hobby) {
//         console.group(`${name} info:`);
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//         console.log(`His job is ${job}`);
//         console.log(`He has ${hobby} hobby`);
//         console.groupEnd;
//     }
// };

// const Andrew = {
//     name: "Andrew",
//     age: 19,
// };

// userInfo.clientInformation.call(Andrew, "developer", "cycling");
// userInfo.clientInformation.bind(Andrew, "developer", "cycling")();
// userInfo.clientInformation.apply(Andrew, ["developer", "cycling"]);

