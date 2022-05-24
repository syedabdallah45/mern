// var a= "hello world";
// console.log(a)

// var a = 233;
// console.log(typeof(a))

// var a =3;
// var b= 4;
// console.log(a+b)

// var num=7
// if(num%2==0){
//     console.log("Its a even number")
// }
// else{
//     console.log("Its a odd number")
// }




// const number = 9;

// const result = Math.sqrt(number);
// console.log(`The square root of ${number} is ${result}`);

// var a=4;
// var b=9;

// temp =a;
// a=b;
// b=temp;

// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);

// const miles=22;
// const factor =0.621371

// const km = miles *factor

// console.log(`${miles} miles is equal to ${km} km.`)


// var units =90
// var bill = 0
// if(units<=50){
//   bill  = (units)*3
// }
// else if(units <=100){
//   bill =50*3 + (units-50)*5
// }
// else if(units >=100){
//   bill =50*3 + 50*5 + (units-100)*7
// }
// // else if(units>250){
// //   bill = 50*3 + 100*5 + 1*7
// // }

// // if(bill>150){
// //   bill = bill + bill*0.2
// // }

// console.log(bill)



// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// for(items of fruits){
//   console.log(items)
// }

// function calculateAggregate(marks) {
//   var totalMarks = 600;
//   var marksSecured = 0;

//   for (var i = 0; i < marks.length; i++) {
//       marksSecured = marksSecured + marks[i];
//       console.log(marksSecured);
//   }

//   var agg = (marksSecured / totalMarks) * 100;
//   return agg;
  
// }

// // entity 2
// var res = calculateAggregate([80, 70, 60, 55, 66, 87]);
// console.log(res);



function fn(a, b) {
  a.width = 100;
}
var x = 10;
var y = 20;

var o1 = { width: 10, height: 20 };
var o2 = { width: 10, height: 20 };


var o3 = o1;

o3 === o1

x === y;

console.log(fn(o1, o2)); // value types


var abstractMobile = {
  call: function () {
      console.log("Calling...");
  }
};

var m1 = Object.create(abstractMobile, {
  // prop descriptor
  pi: {
      value: 3.14,
      enumerable: true,
      writable: true,
      configurable: false
  },
  width: { value: 5, enumerable: true },
  height: { value: 7, enumerable: true },
  color: { value: 'Red', enumerable: true }
});

// // reconfiguration
Object.defineProperty(m1, 'pi', {
    // value: 4.14
     
});
console.log(m1);

// reflection
// for (var key in m1) {
//     console.log(key);
// }

// giving errors
m1.width = 1000;
console.log(m1);